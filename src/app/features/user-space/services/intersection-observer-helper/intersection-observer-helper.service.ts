import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverHelperService {
  private readonly intersectionObserverOptions: IntersectionObserverInit = {
    rootMargin: '-64px 0px 0px 0px',
    threshold: 1,
  };

  constructor() {}

  createIntersectionObserver(
    elementsQuerySelector: string,
    intersectionObserverCallback: IntersectionObserverCallback,
    intersectionObserverOptions = this.intersectionObserverOptions
  ) {
    const intersectionObserver = new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions
    );
    const elements = document.querySelectorAll(elementsQuerySelector);
    elements.forEach((element) => intersectionObserver.observe(element));
    return intersectionObserver;
  }
}
