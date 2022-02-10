import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorTheme } from 'src/app/shared/enums/color-theme.enum';
import { NavigationItem } from 'src/app/shared/models/navigation-item.model';
import { Feature } from '../../enums/feature.enum';

@Component({
  selector: 'shared-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
})
export class DesktopHeaderComponent implements OnInit {
  Math = Math;

  @Input() isPageTitleIntersecting = false;
  @Input() navigationItems: NavigationItem[] = [];
  @Input() feature = Feature.USER_SPACE;
  @Output() clickLogoutButton = new EventEmitter<void>();

  Feature = Feature;
  ColorTheme = ColorTheme;

  constructor() {}

  ngOnInit(): void {}
}
