import { Component, HostListener, OnInit } from '@angular/core';
import { dishes } from 'src/app/shared/data/dishes.data';
import { allergenes } from 'src/app/shared/data/allergenes.data';
import { Tab } from 'src/app/shared/models/tab.model';
import { Dish } from 'src/app/shared/models/dish.model';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { NgForm } from '@angular/forms';
import { dishGroups } from 'src/app/shared/data/dish-groups.data';
import { HomeModal } from '../../enums/home-modal.enum';

@Component({
  selector: 'admin-space-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dishes = dishes;
  allergenes = allergenes;
  dishGroups = dishGroups;
  tabs: Tab[] = [
    {
      value: 'dishes',
      label: 'Gerichte',
    },
    {
      value: 'allergenes',
      label: 'Allergene',
    },
  ];
  selectedTab: Tab = this.tabs[0];
  selectedDish?: Dish;
  selectedAllergene?: Allergene;
  @HostListener('document:click') onClickDocument() {
    this.selectedDish = undefined;
    this.selectedAllergene = undefined;
  }
  currentlyVisibleModal: HomeModal | null = null;

  HomeModal = HomeModal;

  constructor() {}

  ngOnInit(): void {}

  onChangeSelect(tabValue: string) {
    this.selectedTab = this.tabs.find((tab) => tab.value === tabValue)!;
  }

  onClickCreateButton() {
    switch (this.selectedTab.value) {
      case 'dishes':
        this.currentlyVisibleModal = HomeModal.CREATE_DISH;
        break;
      case 'allergenes':
        this.currentlyVisibleModal = HomeModal.CREATE_ALLERGENE;
        break;
    }
  }

  onClickDishMoreButton(selectedDish: Dish, event: MouseEvent) {
    this.selectedDish =
      this.selectedDish?.id === selectedDish.id ? undefined : selectedDish;
    event.stopPropagation();
  }

  onClickAllergeneMoreButton(selectedAllergene: Allergene, event: MouseEvent) {
    this.selectedAllergene =
      this.selectedAllergene?.id === selectedAllergene.id
        ? undefined
        : selectedAllergene;
    event.stopPropagation();
    this.currentlyVisibleModal = HomeModal.CREATE_ALLERGENE;
  }

  onClickCreateModalSaveButton(form: NgForm) {
    console.log(form);
  }

  onClickModalCloseButton() {
    this.currentlyVisibleModal = null;
  }

  onClickModalCancelButton() {
    this.currentlyVisibleModal = null;
  }
}
