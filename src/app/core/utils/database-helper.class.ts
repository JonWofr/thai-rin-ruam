import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from '@angular/fire/firestore';
import { SpinnerControllerService } from 'src/app/features/admin-space/services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from 'src/app/features/admin-space/services/toast-controller/toast-controller.service';

export abstract class DatabaseHelper {
  constructor(
    private spinnerController: SpinnerControllerService,
    private toastController: ToastControllerService
  ) {}

  getDataConverter<T>(): FirestoreDataConverter<T> {
    return {
      toFirestore(data: WithFieldValue<T>): DocumentData {
        // When a document is added or replaced an existing id property has to be deleted
        if ('id' in data) delete data['id'];
        return data as DocumentData;
      },
      fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
      ): T {
        const data = snapshot.data(options)!;
        return data as T;
      },
    };
  }

  async withSpinnerAndToast(
    crudFunction: () => Promise<void>,
    successMessage: string,
    errorMessage?: string
  ) {
    try {
      this.spinnerController.showSpinner();
      await crudFunction();
      this.toastController.showSuccessToast(successMessage);
    } catch (err) {
      this.toastController.showErrorToast(errorMessage ?? (err as string));
    } finally {
      this.spinnerController.hideSpinner();
    }
  }
}
