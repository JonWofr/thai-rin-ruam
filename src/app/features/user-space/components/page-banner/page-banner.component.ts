import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
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
    this.titleIntersectionObserver =
      this.intersectionObserverHelper.createIntersectionObserver(
        '.page-banner__title',
        (entries) => {
          entries.forEach((entry) =>
            this.titleIntersection.subject.next(entry.isIntersecting)
          );
        }
      );
  }

  ngOnDestroy(): void {
    this.titleIntersectionObserver?.disconnect();
  }
}
