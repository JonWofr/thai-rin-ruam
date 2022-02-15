import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { Option } from 'src/app/features/admin-space/models/option.model';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { DishGroup } from 'src/app/shared/models/dish-group.model';
import { SelectType } from '../../enums/select-type.enum';
import { Dish } from 'src/app/shared/models/dish.model';

@Component({
  selector: 'admin-space-create-dish-modal',
  templateUrl: './create-dish-modal.component.html',
  styleUrls: ['./create-dish-modal.component.scss'],
})
export class CreateDishModalComponent implements OnInit {
  get dish() {
    return this._dish;
  }
  @Input() set dish(dish: Dish) {
    this.selectedAllergeneOptions = this.mapAllergenesToAllergeneOptions(
      dish.allergenes
    );
    if (dish.group) {
      this.selectedDishGroupOptions = this.mapDishGroupsToDishGroupOptions([
        dish.group,
      ]);
    }
    this._dish = dish;
  }
  get allergenes() {
    return this._allergenes;
  }
  @Input() set allergenes(allergenes: Allergene[]) {
    this.allergeneOptions = this.mapAllergenesToAllergeneOptions(allergenes);
    this._allergenes = allergenes;
  }
  get dishGroups() {
    return this._dishGroups;
  }
  @Input() set dishGroups(dishGroups: DishGroup[]) {
    this.dishGroupOptions = this.mapDishGroupsToDishGroupOptions(dishGroups);
    this._dishGroups = dishGroups;
  }
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<NgForm>();

  private _dish: Dish = {
    id: '',
    number: NaN,
    name: '',
    thaiName: '',
    hotnessLevel: HotnessLevel.NOT_HOT,
    allergenes: [],
    category: dishCategories[0],
    description: '',
    options: [],
  };
  private _allergenes: Allergene[] = [];
  private _dishGroups: DishGroup[] = [];
  allergeneOptions: Option[] = [];
  selectedAllergeneOptions: Option[] = [];
  dishGroupOptions: Option[] = [];
  selectedDishGroupOptions: Option[] = [];
  hotnessLevels = Object.values(HotnessLevel);
  dishCategories = dishCategories;

  SelectType = SelectType;

  constructor() {}

  ngOnInit(): void {}

  mapAllergenesToAllergeneOptions(allergenes: Allergene[]) {
    return allergenes.map<Option>((allergene) => ({
      label: allergene.abbreviation,
      value: allergene.id,
    }));
  }

  mapDishGroupsToDishGroupOptions(dishGroups: DishGroup[]) {
    return dishGroups.map<Option>((dishGroup) => ({
      value: dishGroup.id,
      label: dishGroup.name,
    }));
  }

  onChangeSelectedAllergeneOptions(selectedAllergeneOptions: Option[]) {
    const selectedAllergenes = selectedAllergeneOptions.map(
      (selectedAllergeneOption) =>
        this.allergenes.find(
          (allergene) => allergene.id === selectedAllergeneOption.value
        )!
    );
    this.dish.allergenes = selectedAllergenes;
  }

  onChangeSelectedDishGroupOptions(selectedDishGroupOptions: Option[]) {
    const selectedDishGroups = selectedDishGroupOptions.map(
      (selectedDishGroupOption) =>
        this.dishGroups.find(
          (dishGroup) => dishGroup.id === selectedDishGroupOption.value
        )!
    );
    this.dish.group = selectedDishGroups[0];
  }

  onClickAddDishOptionButton() {}
}
