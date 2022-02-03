import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-privacy.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { NewsComponent } from './pages/news/news.component';
import { UserSpaceComponent } from './user-space.component';

const routes: Routes = [
  {
    path: '',
    component: UserSpaceComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'impressum',
        component: ImpressumComponent,
      },
      {
        path: 'data-privacy',
        component: DataPrivacyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSpaceRoutingModule {}
