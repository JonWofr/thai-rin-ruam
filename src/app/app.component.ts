import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'thai-rin-ruam-new';
  endSubscriptions = new Subject<void>();

  constructor(router: Router, viewportScroller: ViewportScroller) {
    // Custom implementation for working scroll position restoration at backwards navigation. Otherwise the position is off from where it should be.
    router.events
      .pipe(
        takeUntil(this.endSubscriptions),
        filter((event: Event): event is Scroll => event instanceof Scroll)
      )
      .subscribe((event) => {
        if (event.position) {
          // backward navigation
          const position = event.position;
          setTimeout(() => {
            viewportScroller.scrollToPosition(position);
          });
        } else if (event.anchor) {
          // anchor navigation
          viewportScroller.scrollToAnchor(event.anchor);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

  ngOnInit(): void {
    // Default theme is light. Also default section padding is set.
    document.documentElement.classList.add('light-theme');
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
  }
}
