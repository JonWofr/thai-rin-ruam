import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleIntersectionService {
  subject = new Subject<boolean>();

  constructor() {}
}
