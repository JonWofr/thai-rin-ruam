import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { NavigationItem } from 'src/app/shared/models/navigation-item.model';
import { TitleIntersectionService } from './services/title-intersection/title-intersection.service';

@Component({
  selector: 'user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss'],
})
export class UserSpaceComponent implements OnInit, OnDestroy {
  isPageTitleIntersecting?: boolean;
  navigationItems: NavigationItem[] = [
    {
      name: 'Aktuelles',
      link: '/news',
      linkActiveOptions: {
        exact: true,
      },
    },
    {
      name: 'Speisekarte',
      link: '/menu',
      linkActiveOptions: {
        // Set to false so that the route is still considered active with query
        // params
        exact: false,
      },
    },
    {
      name: 'Über Uns',
      link: '/about-us',
      linkActiveOptions: {
        exact: true,
      },
    },
    {
      name: 'Kontakt',
      link: '/contact',
      linkActiveOptions: {
        exact: true,
      },
    },
  ];
  endSubscriptions = new Subject<void>();

  constructor(titleIntersection: TitleIntersectionService) {
    titleIntersection.subject
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((isIntersecting) => {
        this.isPageTitleIntersecting = isIntersecting;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
  }
}
