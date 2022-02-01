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
import { DishCategoriesSectionComponent } from './components/dish-categories-section/dish-categories-section.component';
import { DishCategoryCardComponent } from './components/dish-category-card/dish-category-card.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { HolidayNoteComponent } from './components/holiday-note/holiday-note.component';
import { FooterComponent } from './components/footer/footer.component';

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
    DishCategoriesSectionComponent,
    DishCategoryCardComponent,
    LocationSectionComponent,
    HolidayNoteComponent,
    FooterComponent,
  ],
  imports: [CommonModule, UserSpaceRoutingModule, SharedModule],
})
export class UserSpaceModule {}
