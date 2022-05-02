import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  orderBy,
  query,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SpinnerControllerService } from 'src/app/features/admin-space/services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from 'src/app/features/admin-space/services/toast-controller/toast-controller.service';
import { Dish } from 'src/app/shared/models/dish.model';
import { DatabaseHelper } from '../../utils/database-helper.class';

@Injectable({
  providedIn: 'root',
})
export class DishesHelperService extends DatabaseHelper {
  private readonly COLLECTION_NAME = 'dishes';

  private col = collection(this.firestore, this.COLLECTION_NAME).withConverter(
    this.getDataConverter<Dish>()
  );

  constructor(
    private firestore: Firestore,
    spinnerController: SpinnerControllerService,
    toastController: ToastControllerService
  ) {
    super(spinnerController, toastController);
  }

  fetchAll(): Observable<Dish[]> {
    const q = query(this.col, orderBy('number'));
    return collectionData(q, {
      idField: 'id',
    });
  }

  async create(dish: Dish) {
    await this.withSpinnerAndToast(async () => {
      await addDoc(this.col, dish);
    }, `Gericht ${dish.name} erfolgreich erstellt`);
  }

  async update(dish: Dish) {
    await this.withSpinnerAndToast(async () => {
      const docRef = doc(this.col, dish.id);
      await setDoc(docRef, dish);
    }, `Gericht ${dish.name} erfolgreich geupdated`);
  }

  async delete(dish: Dish) {
    await this.withSpinnerAndToast(async () => {
      const docRef = doc(this.col, dish.id);
      await deleteDoc(docRef);
    }, `Gericht ${dish.name} erfolgreich gelöscht`);
  }
}
