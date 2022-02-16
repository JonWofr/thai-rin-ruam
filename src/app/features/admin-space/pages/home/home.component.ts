import { Component, HostListener, OnInit } from '@angular/core';
import { dishes } from 'src/app/shared/data/dishes.data';
import { allergenes } from 'src/app/shared/data/allergenes.data';
import { Dish } from 'src/app/shared/models/dish.model';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { dishGroups } from 'src/app/shared/data/dish-groups.data';
import { ModalType } from '../../enums/modal-type.enum';
import { Option } from '../../models/option.model';
import { HomeTab } from '../../enums/home-tab.enum';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'admin-space-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dishes = dishes;
  allergenes = allergenes;
  dishGroups = dishGroups;
  tabs: Option[] = [
    {
      value: HomeTab.DISHES,
      label: 'Gerichte',
    },
    {
      value: HomeTab.ALLERGENES,
      label: 'Allergene',
    },
  ];
  selectedTab: Option = this.tabs[0];
  selectedDish?: Dish;
  selectedAllergene?: Allergene;
  @HostListener('document:click') onClickDocument() {
    if (this.currentlyVisibleModalType === null) {
      this.selectedDish = undefined;
      this.selectedAllergene = undefined;
    }
  }
  currentlyVisibleModalType: ModalType | null = null;

  ModalType = ModalType;
  HomeTab = HomeTab;

  constructor() {}

  ngOnInit(): void {}

  onChangeSelect(tabValue: string) {
    this.selectedTab = this.tabs.find((tab) => tab.value === tabValue)!;
  }

  onClickDishMoreButton(selectedDish: Dish, event: MouseEvent) {
    this.selectedDish =
      this.selectedDish?.id === selectedDish.id
        ? undefined
        : cloneDeep(selectedDish);
    event.stopPropagation();
  }

  onClickAllergeneMoreButton(selectedAllergene: Allergene, event: MouseEvent) {
    this.selectedAllergene =
      this.selectedAllergene?.id === selectedAllergene.id
        ? undefined
        : cloneDeep(selectedAllergene);
    event.stopPropagation();
  }

  onClickCreateButton() {
    this.currentlyVisibleModalType = ModalType.CREATE;
  }

  onClickContextMenuEditButton() {
    this.currentlyVisibleModalType = ModalType.UPDATE;
  }

  onClickContextMenuDeleteButton() {
    this.currentlyVisibleModalType = ModalType.DELETE;
  }

  onClickModalCloseButton() {
    this.currentlyVisibleModalType = null;
  }

  onClickModalCancelButton() {
    this.currentlyVisibleModalType = null;
  }

  onClickModalCreateButton(document: Dish | Allergene) {
    this.currentlyVisibleModalType = null;
  }

  onClickModalDeleteButton() {}
}
