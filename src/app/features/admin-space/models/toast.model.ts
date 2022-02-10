import { ToastType } from '../enums/toast-type.enum';

export interface Toast {
  type: ToastType;
  message: string;
}
