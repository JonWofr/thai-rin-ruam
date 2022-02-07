import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorTheme } from 'src/app/shared/enums/color-theme.enum';
import { TitleIntersectionService } from './services/title-intersection/title-intersection.service';

@Component({
  selector: 'user-space-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss'],
})
export class UserSpaceComponent implements OnInit, OnDestroy {
  headerColorTheme?: ColorTheme;
  titleIntersectionSubscription?: Subscription;

  constructor(titleIntersection: TitleIntersectionService) {
    this.titleIntersectionSubscription = titleIntersection.subject.subscribe(
      (isIntersecting) => {
        this.headerColorTheme = isIntersecting
          ? ColorTheme.DARK
          : ColorTheme.LIGHT;
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.titleIntersectionSubscription?.unsubscribe();
  }
}
