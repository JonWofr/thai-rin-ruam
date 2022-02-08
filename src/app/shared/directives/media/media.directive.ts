import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * This directive is equivalent to css media queries but can be applied to elements. It can be applied to any element.
 * It is a structural directve (like ngIf). If the query matches the element will be rendered otherwise it won't.
 */
@Directive({
  selector: '[sharedMedia]',
})
export class MediaDirective {
  @Input() set sharedMedia(query: string) {
    this.setListener(query);
  }
  private hasView = false;

  // TODO: Maybe the event listener should be removed. Could cause leaks.

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  private setListener(query: string) {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!event.matches && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    };
    // Has to be called once because the listener will only trigger onChange
    listener(mediaQueryList);
    mediaQueryList.addEventListener('change', listener);
  }
}
