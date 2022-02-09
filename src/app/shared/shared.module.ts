import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from './directives/fade-in/fade-in.directive';
import { MediaDirective } from './directives/media/media.directive';

@NgModule({
  declarations: [FadeInDirective, MediaDirective],
  imports: [CommonModule],
  exports: [FadeInDirective, MediaDirective],
})
export class SharedModule {}
