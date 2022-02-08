import { Directive, ElementRef } from '@angular/core';
import { FadeInIntersectionObserverService } from 'src/app/core/services/fade-in-intersection-observer/fade-in-intersection-observer.service';

@Directive({
  selector: '[sharedFadeIn]',
})
export class FadeInDirective {
  constructor(
    private fadeInIntersectionObserver: FadeInIntersectionObserverService,
    private elementRef: ElementRef
  ) {
    const element = this.elementRef.nativeElement;
    element.classList.add('fade-in');
    this.fadeInIntersectionObserver.intersectionObserver.observe(element);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.fadeInIntersectionObserver.intersectionObserver.unobserve(
      this.elementRef.nativeElement
    );
  }
}
