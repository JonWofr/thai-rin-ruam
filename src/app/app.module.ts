import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminSpaceModule } from './features/admin-space/admin-space.module';
import { UserSpaceModule } from './features/user-space/user-space.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserSpaceModule,
    AdminSpaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
