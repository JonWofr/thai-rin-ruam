import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IntersectionObserverHelperService } from '../../services/intersection-observer-helper/intersection-observer-helper.service';
import { TitleIntersectionService } from '../../services/title-intersection/title-intersection.service';

@Component({
  selector: 'user-space-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
})
export class PageBannerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() title = '';
  @Input() imageUrl = '';

  titleIntersectionObserver?: IntersectionObserver;

  constructor(
    private intersectionObserverHelper: IntersectionObserverHelperService,
    private titleIntersection: TitleIntersectionService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialiseIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.titleIntersectionObserver?.disconnect();
  }

  initialiseIntersectionObserver() {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    this.titleIntersectionObserver =
      this.intersectionObserverHelper.createIntersectionObserver(
        '.page-banner__title',
        this.titleIntersectionObserverCallback.bind(this),
        {
          rootMargin: isDesktop ? '-112px 0px 0px 0px' : '-64px 0px 0px 0px',
          threshold: 1,
        }
      );
  }

  titleIntersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      this.titleIntersection.subject.next(entry.isIntersecting)
    );
  }
}
