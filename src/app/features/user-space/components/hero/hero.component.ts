import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IntersectionObserverHelperService } from '../../services/intersection-observer-helper/intersection-observer-helper.service';
import { TitleIntersectionService } from '../../services/title-intersection/title-intersection.service';

@Component({
  selector: 'user-space-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  titleIntersectionObserver?: IntersectionObserver;

  constructor(
    private intersectionObserverHelper: IntersectionObserverHelperService,
    private titleIntersection: TitleIntersectionService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.titleIntersectionObserver =
      this.intersectionObserverHelper.createIntersectionObserver(
        '.hero__title',
        this.titleIntersectionObserverCallback.bind(this)
      );
  }

  ngOnDestroy(): void {
    this.titleIntersectionObserver?.disconnect();
  }

  titleIntersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      this.titleIntersection.subject.next(entry.isIntersecting)
    );
  }
}
