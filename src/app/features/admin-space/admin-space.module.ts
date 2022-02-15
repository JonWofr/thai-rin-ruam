import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSpaceRoutingModule } from './admin-space-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AdminSpaceComponent } from './admin-space.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { NewsComponent } from './pages/news/news.component';
import { AddItemCardComponent } from './components/add-item-card/add-item-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { CreateDishModalComponent } from './components/create-dish-modal/create-dish-modal.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { EditableSelectComponent } from './components/editable-select/editable-select.component';
import { ChipComponent } from './components/chip/chip.component';
import { MapAllergenesToOptionsPipe } from './pipes/map-allergenes-to-options/map-allergenes-to-options.pipe';
import { MapDishgroupsToOptionsPipe } from './pipes/map-dishgroups-to-options/map-dishgroups-to-options.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    AdminSpaceComponent,
    LoginCardComponent,
    ToastComponent,
    HomeComponent,
    ContextMenuComponent,
    NewsComponent,
    AddItemCardComponent,
    ModalComponent,
    CreateModalComponent,
    CreateDishModalComponent,
    MultiSelectComponent,
    EditableSelectComponent,
    ChipComponent,
    MapAllergenesToOptionsPipe,
    MapDishgroupsToOptionsPipe,
  ],
  imports: [CommonModule, AdminSpaceRoutingModule, FormsModule, SharedModule],
})
export class AdminSpaceModule {}
