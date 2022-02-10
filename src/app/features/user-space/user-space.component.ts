import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationItem } from 'src/app/shared/models/navigation-item.model';
import { TitleIntersectionService } from './services/title-intersection/title-intersection.service';

@Component({
  selector: 'user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss'],
})
export class UserSpaceComponent implements OnInit, OnDestroy {
  isPageTitleIntersecting?: boolean;
  titleIntersectionSubscription?: Subscription;
  navigationItems: NavigationItem[] = [
    {
      name: 'Aktuelles',
      link: '/news',
    },
    {
      name: 'Speisekarte',
      link: '/menu',
    },
    {
      name: 'Über Uns',
      link: '/about-us',
    },
    {
      name: 'Kontakt',
      link: '/contact',
    },
  ];

  constructor(titleIntersection: TitleIntersectionService) {
    this.titleIntersectionSubscription = titleIntersection.subject.subscribe(
      (isIntersecting) => {
        this.isPageTitleIntersecting = isIntersecting;
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.titleIntersectionSubscription?.unsubscribe();
  }
}
