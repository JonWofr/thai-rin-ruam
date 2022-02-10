import {
  Component,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ColorTheme } from 'src/app/shared/enums/color-theme.enum';
import { NavigationItem } from 'src/app/shared/models/navigation-item.model';
import { Feature } from '../../enums/feature.enum';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isPageTitleIntersecting = false;
  @Input() navigationItems: NavigationItem[] = [];
  @Input() feature = Feature.USER_SPACE;
  @Output() clickLogoutButton = new EventEmitter<void>();

  Feature = Feature;
  ColorTheme = ColorTheme;

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
