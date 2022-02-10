import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSpaceRoutingModule } from './admin-space-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AdminSpaceComponent } from './admin-space.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    AdminSpaceComponent,
    LoginCardComponent,
    ToastComponent,
  ],
  imports: [CommonModule, AdminSpaceRoutingModule, FormsModule, SharedModule],
})
export class AdminSpaceModule {}
