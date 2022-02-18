import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { AdminSpaceComponent } from './admin-space.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/admin/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/admin/']);

const routes: Routes = [
  {
    path: 'admin',
    component: AdminSpaceComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'login',
        component: LoginComponent,
        ...canActivate(redirectLoggedInToHome),
      },
      {
        path: 'news',
        component: NewsComponent,
        ...canActivate(redirectUnauthorizedToLogin),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSpaceRoutingModule {}
