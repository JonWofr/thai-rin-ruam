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
import { CreateOrUpdateDishModalComponent } from './components/create-or-update-dish-modal/create-or-update-dish-modal.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { EditableSelectComponent } from './components/editable-select/editable-select.component';
import { ChipComponent } from './components/chip/chip.component';
import { MapAllergenesToOptionsPipe } from './pipes/map-allergenes-to-options/map-allergenes-to-options.pipe';
import { MapDishgroupsToOptionsPipe } from './pipes/map-dishgroups-to-options/map-dishgroups-to-options.pipe';
import { DeleteDishModalComponent } from './components/delete-dish-modal/delete-dish-modal.component';
import { CreateOrUpdateAllergeneModalComponent } from './components/create-or-update-allergene-modal/create-or-update-allergene-modal.component';
import { DeleteAllergeneModalComponent } from './components/delete-allergene-modal/delete-allergene-modal.component';
import { CreateOrUpdateNewsModalComponent } from './components/create-or-update-news-modal/create-or-update-news-modal.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { ImagesPickerComponent } from './components/images-picker/images-picker.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';

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
    CreateOrUpdateDishModalComponent,
    MultiSelectComponent,
    EditableSelectComponent,
    ChipComponent,
    MapAllergenesToOptionsPipe,
    MapDishgroupsToOptionsPipe,
    DeleteDishModalComponent,
    CreateOrUpdateAllergeneModalComponent,
    DeleteAllergeneModalComponent,
    CreateOrUpdateNewsModalComponent,
    FileInputComponent,
    ImagesPickerComponent,
    FilePreviewComponent,
  ],
  imports: [CommonModule, AdminSpaceRoutingModule, FormsModule, SharedModule],
})
export class AdminSpaceModule {}
