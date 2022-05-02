import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastType } from '../../enums/toast-type.enum';
import { Toast } from '../../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastControllerService {
  subject = new Subject<Toast>();

  constructor() {}

  showToast(toast: Toast) {
    this.subject.next(toast);
  }

  showSuccessToast(message: string) {
    this.showToast({
      type: ToastType.SUCCESS,
      message,
    });
  }

  showWarnToast(message: string) {
    this.showToast({
      type: ToastType.WARN,
      message,
    });
  }

  showErrorToast(message: string) {
    this.showToast({
      type: ToastType.ERROR,
      message,
    });
  }
}
