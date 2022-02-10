import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from './directives/fade-in/fade-in.directive';
import { MediaDirective } from './directives/media/media.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DarkOverlayComponent } from './components/dark-overlay/dark-overlay.component';
import { HeaderComponent } from './components/header/header.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FadeInDirective,
    MediaDirective,
    SpinnerComponent,
    DarkOverlayComponent,
    HeaderComponent,
    DesktopHeaderComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    FadeInDirective,
    MediaDirective,
    SpinnerComponent,
    DarkOverlayComponent,
    HeaderComponent,
    DesktopHeaderComponent,
  ],
})
export class SharedModule {}
