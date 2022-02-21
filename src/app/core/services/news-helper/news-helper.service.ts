import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  query,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  collectionData,
  Timestamp,
} from '@angular/fire/firestore';
import {
  ref,
  uploadString,
  getDownloadURL,
  Storage,
  deleteObject,
} from '@angular/fire/storage';
import { SpinnerControllerService } from 'src/app/features/admin-space/services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from 'src/app/features/admin-space/services/toast-controller/toast-controller.service';
import { News } from 'src/app/shared/models/news.model';
import { DatabaseHelper } from '../../utils/database-helper.class';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NewsHelperService extends DatabaseHelper {
  private readonly COLLECTION_NAME = 'news';

  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.getDataConverter<News>()
  );

  constructor(
    private firestore: Firestore,
    spinnerController: SpinnerControllerService,
    toastController: ToastControllerService,
    private storage: Storage
  ) {
    super(spinnerController, toastController);
  }

  fetchAll() {
    const q = query(this.col);
    return collectionData(q, {
      idField: 'id',
    });
  }

  async create(news: News) {
    await this.withSpinnerAndToast(async () => {
      await this.replaceDataUrls(news);
      // Update the creation time
      news.date = Timestamp.now();
      await addDoc(this.col, news);
    }, `Neuigkeit ${news.title} erfolgreich erstellt`);
  }

  private async replaceDataUrls(news: News) {
    const urls = await Promise.all(
      news.imageUrls.map((imageUrl) => this.replaceDataUrl(imageUrl))
    );
    news.imageUrls = urls;
  }

  private async replaceDataUrl(slideshowImageUrl: string) {
    const url = this.isDataUrl(slideshowImageUrl)
      ? await this.uploadDataUrl(slideshowImageUrl)
      : slideshowImageUrl;
    return url;
  }

  private isDataUrl(value: string) {
    return new RegExp(/data:/).test(value);
  }

  private async uploadDataUrl(dataUrl: string) {
    const fileRef = ref(this.storage, `images/${uuidv4()}`);
    await uploadString(fileRef, dataUrl, 'data_url');
    return await getDownloadURL(fileRef);
  }

  async update(news: News) {
    await this.withSpinnerAndToast(async () => {
      await this.replaceDataUrls(news);
      const docRef = doc(this.col, news.id);
      await setDoc(docRef, news);
    }, `Neuigkeit ${news.title} erfolgreich geupdated`);
  }

  async delete(news: News) {
    await this.withSpinnerAndToast(async () => {
      await this.deleteImages(news);
      const docRef = doc(this.col, news.id);
      await deleteDoc(docRef);
    }, `Neuigkeit ${news.title} erfolgreich gelöscht`);
  }

  private deleteImages(news: News) {
    return Promise.all(
      news.imageUrls.map((imageUrl) => this.deleteImage(imageUrl))
    );
  }

  private async deleteImage(path: string) {
    const fileRef = ref(this.storage, path);
    await deleteObject(fileRef);
  }
}
