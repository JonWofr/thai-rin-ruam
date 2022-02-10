import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from './directives/fade-in/fade-in.directive';
import { MediaDirective } from './directives/media/media.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DarkOverlayComponent } from './components/dark-overlay/dark-overlay.component';

@NgModule({
  declarations: [
    FadeInDirective,
    MediaDirective,
    SpinnerComponent,
    DarkOverlayComponent,
  ],
  imports: [CommonModule],
  exports: [
    FadeInDirective,
    MediaDirective,
    SpinnerComponent,
    DarkOverlayComponent,
  ],
})
export class SharedModule {}
