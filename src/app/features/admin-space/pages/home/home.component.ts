import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { ModalType } from '../../enums/modal-type.enum';
import { Option } from '../../../../shared/models/option.model';
import { HomeTab } from '../../enums/home-tab.enum';
import { cloneDeep } from 'lodash';
import { Title } from '@angular/platform-browser';
import { DishesHelperService } from 'src/app/core/services/dishes-helper/dishes-helper.service';
import { AllergenesHelperService } from 'src/app/core/services/allergenes-helper/allergenes-helper.service';
import { Dish } from 'src/app/shared/models/dish.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-space-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  dishes: Dish[] = [];
  allergenes: Allergene[] = [];
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
  isFetchingDishes = false;
  isFetchingAllergenes = false;
  endSubscriptions = new Subject<void>();

  ModalType = ModalType;
  HomeTab = HomeTab;

  constructor(
    title: Title,
    private dishesHelper: DishesHelperService,
    private allergenesHelper: AllergenesHelperService
  ) {
    title.setTitle('Speisekarte – Admin-Bereich – Thai Rin Ruam');
  }

  ngOnInit(): void {
    this.isFetchingDishes = true;
    this.dishesHelper
      .fetchAll()
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((dishes) => {
        this.isFetchingDishes = false;
        this.dishes = dishes;
      });
    this.isFetchingAllergenes = true;
    this.allergenesHelper
      .fetchAll()
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((allergenes) => {
        this.isFetchingAllergenes = false;
        this.allergenes = allergenes;
      });
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
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

  async createDish(dish: Dish) {
    await this.dishesHelper.create(dish);
    this.currentlyVisibleModalType = null;
  }

  async updateDish(dish: Dish) {
    await this.dishesHelper.update(dish);
    this.currentlyVisibleModalType = null;
  }

  async deleteDish() {
    if (!this.selectedDish) return;
    await this.dishesHelper.delete(this.selectedDish);
    this.currentlyVisibleModalType = null;
  }

  async createAllergene(allergene: Allergene) {
    await this.allergenesHelper.create(allergene);
    this.currentlyVisibleModalType = null;
  }

  async updateAllergene(allergene: Allergene) {
    await this.allergenesHelper.update(allergene);
    this.currentlyVisibleModalType = null;
  }

  async deleteAllergene() {
    if (!this.selectedAllergene) return;
    await this.allergenesHelper.delete(this.selectedAllergene);
    this.currentlyVisibleModalType = null;
  }
}
