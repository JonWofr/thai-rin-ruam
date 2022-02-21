import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  orderBy,
  query,
  deleteDoc,
  doc,
  getDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { SpinnerControllerService } from 'src/app/features/admin-space/services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from 'src/app/features/admin-space/services/toast-controller/toast-controller.service';
import { DishGroup } from 'src/app/shared/models/dish-group.model';
import { DatabaseHelper } from '../../utils/database-helper.class';

@Injectable({
  providedIn: 'root',
})
export class DishGroupsHelperService extends DatabaseHelper {
  private readonly COLLECTION_NAME = 'dish-groups';

  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.getDataConverter<DishGroup>()
  );

  constructor(
    private firestore: Firestore,
    spinnerController: SpinnerControllerService,
    toastController: ToastControllerService
  ) {
    super(spinnerController, toastController);
  }

  fetchAll() {
    const q = query(this.col, orderBy('name'));
    return collectionData(q, {
      idField: 'id',
    });
  }

  fetchOne(id: string) {
    const docRef = doc(this.col, id);
    return getDoc(docRef);
  }

  async create(dishGroup: DishGroup) {
    let docRef: DocumentReference<DishGroup>;
    await this.withSpinnerAndToast(async () => {
      docRef = await addDoc(this.col, dishGroup);
    }, `Gruppe ${dishGroup.name} erfolgreich erstellt`);
    return docRef!;
  }

  async delete(dishGroup: DishGroup) {
    await this.withSpinnerAndToast(async () => {
      const docRef = doc(this.col, dishGroup.id);
      await deleteDoc(docRef);
    }, `Gruppe ${dishGroup.name} erfolgreich gelöscht`);
  }
}
