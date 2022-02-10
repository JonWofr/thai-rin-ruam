import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerControllerService {
  subject = new Subject<boolean>();

  constructor() {}
}
