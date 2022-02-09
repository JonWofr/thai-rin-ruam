import { Component, Input, OnInit } from '@angular/core';
import { ColorTheme } from 'src/app/shared/enums/color-theme.enum';

@Component({
  selector: 'user-space-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
})
export class DesktopHeaderComponent implements OnInit {
  @Input() isPageTitleIntersecting = true;

  ColorTheme = ColorTheme;

  constructor() {}

  ngOnInit(): void {}
}
