import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ColorTheme } from 'src/app/shared/enums/color-theme.enum';

@Component({
  selector: 'user-space-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() colorTheme: ColorTheme = ColorTheme.DARK;

  @HostListener('document:click', ['$event'])
  onClickDocument() {
    if (this.isExpanded) {
      this.toggleDropdownMenu();
    }
  }

  isExpanded = false;

  constructor() {}

  ngOnInit(): void {}

  onClickBurgerMenuButton(event: MouseEvent) {
    this.toggleDropdownMenu();
    event.stopPropagation();
  }

  toggleDropdownMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
