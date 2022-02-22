import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from './directives/fade-in/fade-in.directive';
import { MediaDirective } from './directives/media/media.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DarkOverlayComponent } from './components/dark-overlay/dark-overlay.component';
import { HeaderComponent } from './components/header/header.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AllergenesPipe } from './pipes/allergenes/allergenes.pipe';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { SelectComponent } from './components/select/select.component';
import { MapToOptionsPipe } from './pipes/map-to-options/map-to-options.pipe';
import { MapToOptionPipe } from './pipes/map-to-option/map-to-option.pipe';

@NgModule({
  declarations: [
    FadeInDirective,
    MediaDirective,
    SpinnerComponent,
    DarkOverlayComponent,
    HeaderComponent,
    DesktopHeaderComponent,
    MenuItemComponent,
    AllergenesPipe,
    NewsCardComponent,
    TabBarComponent,
    SelectComponent,
    MapToOptionsPipe,
    MapToOptionPipe,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    FadeInDirective,
    MediaDirective,
    SpinnerComponent,
    DarkOverlayComponent,
    HeaderComponent,
    DesktopHeaderComponent,
    MenuItemComponent,
    NewsCardComponent,
    TabBarComponent,
    SelectComponent,
    MapToOptionsPipe,
    MapToOptionPipe,
  ],
})
export class SharedModule {}
