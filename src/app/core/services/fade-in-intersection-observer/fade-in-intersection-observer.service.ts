import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FadeInIntersectionObserverService {
  intersectionObserver = new IntersectionObserver(
    this.intersectionObserverCallback,
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0,
    }
  );

  constructor() {}

  private intersectionObserverCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in--visible');
        observer.unobserve(entry.target);
      }
    });
  }
}
