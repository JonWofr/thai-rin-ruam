import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSpaceRoutingModule } from './user-space-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { DividerSectionComponent } from './components/divider-section/divider-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    OpeningHoursComponent,
    HeaderComponent,
    AboutUsSectionComponent,
    SectionHeaderComponent,
    NewsSectionComponent,
    NewsCardComponent,
    DividerSectionComponent,
  ],
  imports: [CommonModule, UserSpaceRoutingModule, SharedModule],
})
export class UserSpaceModule {}
