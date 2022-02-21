import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  orderBy,
  query,
  setDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { SpinnerControllerService } from 'src/app/features/admin-space/services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from 'src/app/features/admin-space/services/toast-controller/toast-controller.service';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { DatabaseHelper } from '../../utils/database-helper.class';

@Injectable({
  providedIn: 'root',
})
export class AllergenesHelperService extends DatabaseHelper {
  private readonly COLLECTION_NAME = 'allergenes';

  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.getDataConverter<Allergene>()
  );

  constructor(
    private firestore: Firestore,
    spinnerController: SpinnerControllerService,
    toastController: ToastControllerService
  ) {
    super(spinnerController, toastController);
  }

  fetchAll() {
    const q = query(this.col, orderBy('abbreviation'));
    return collectionData(q, {
      idField: 'id',
    });
  }

  async create(allergene: Allergene) {
    await this.withSpinnerAndToast(async () => {
      await addDoc(this.col, allergene);
    }, `Allergen ${allergene.abbreviation} erfolgreich erstellt`);
  }

  async update(allergene: Allergene) {
    await this.withSpinnerAndToast(async () => {
      const docRef = doc(this.col, allergene.id);
      await setDoc(docRef, allergene);
    }, `Allergen ${allergene.abbreviation} erfolgreich geupdated`);
  }

  async delete(allergene: Allergene) {
    await this.withSpinnerAndToast(async () => {
      const docRef = doc(this.col, allergene.id);
      await deleteDoc(docRef);
    }, `Allergen ${allergene.abbreviation} erfolgreich gelöscht`);
  }
}
