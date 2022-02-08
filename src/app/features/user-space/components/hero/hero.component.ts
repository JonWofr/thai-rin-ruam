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
  contactButtonIntersectionObserver?: IntersectionObserver;
  isContactButtonIntersecting?: boolean;
  isContactButtonAnimationRunning = false;
  contactButtonAnimationQueue: boolean[] = [];

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
    this.contactButtonIntersectionObserver =
      this.intersectionObserverHelper.createIntersectionObserver(
        '.hero__contact-button-container',
        this.contactButtonIntersectionObserverCallback.bind(this)
      );
  }

  ngOnDestroy(): void {
    this.titleIntersectionObserver?.disconnect();
    this.contactButtonIntersectionObserver?.disconnect();
  }

  titleIntersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      this.titleIntersection.subject.next(entry.isIntersecting)
    );
  }

  contactButtonIntersectionObserverCallback(
    entries: IntersectionObserverEntry[]
  ) {
    entries.forEach((entry) => {
      // No animation should happen when the button is initialised
      if (this.isContactButtonIntersecting === undefined) {
        this.isContactButtonIntersecting = entry.isIntersecting;
        return;
      }

      this.handleContactButtonAnimation(entry.isIntersecting);
    });
  }

  handleContactButtonAnimation(isIntersecting: boolean) {
    if (!this.isContactButtonAnimationRunning) {
      this.startContactButtonAnimation(isIntersecting);
      // Set to the total amount of the CSS transition-duration plus a buffer of 50ms
      this.setTimeoutPromise(550).then(
        this.stopContactButtonAnimation.bind(this)
      );
    } else {
      this.contactButtonAnimationQueue.push(isIntersecting);
    }
  }

  startContactButtonAnimation(isIntersecting: boolean) {
    this.isContactButtonIntersecting = isIntersecting;
    this.isContactButtonAnimationRunning = true;
  }

  setTimeoutPromise(ms: number): Promise<void> {
    return new Promise((resolve, _) => {
      setTimeout(resolve, ms);
    });
  }

  stopContactButtonAnimation() {
    this.isContactButtonAnimationRunning = false;
    if (this.contactButtonAnimationQueue.length > 0) {
      const isIntersecting =
        this.contactButtonAnimationQueue[
          this.contactButtonAnimationQueue.length - 1
        ];
      this.contactButtonAnimationQueue = [];
      this.handleContactButtonAnimation(isIntersecting);
    }
  }
}
