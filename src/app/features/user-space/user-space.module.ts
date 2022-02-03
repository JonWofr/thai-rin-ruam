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
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { UserSpaceComponent } from './user-space.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-privacy.component';

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
    AboutUsComponent,
    PageBannerComponent,
    UserSpaceComponent,
    ContactComponent,
    NewsComponent,
    ImpressumComponent,
    DataPrivacyComponent,
  ],
  imports: [CommonModule, UserSpaceRoutingModule, SharedModule],
})
export class UserSpaceModule {}
