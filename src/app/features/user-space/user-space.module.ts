import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSpaceRoutingModule } from './user-space-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, OpeningHoursComponent, HeaderComponent],
  imports: [CommonModule, UserSpaceRoutingModule, SharedModule],
})
export class UserSpaceModule {}
