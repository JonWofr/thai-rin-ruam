import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleIntersectionService {
  subject = new Subject<boolean>();

  constructor() {}
}
