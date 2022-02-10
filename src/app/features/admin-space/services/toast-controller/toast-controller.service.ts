import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastControllerService {
  subject = new Subject<Toast>();

  constructor() {}
}
