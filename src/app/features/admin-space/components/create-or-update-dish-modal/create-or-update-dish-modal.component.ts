import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { Option } from 'src/app/features/admin-space/models/option.model';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { DishGroup } from 'src/app/shared/models/dish-group.model';
import { SelectType } from '../../enums/select-type.enum';
import { Dish } from 'src/app/shared/models/dish.model';
import { v4 as uuidv4 } from 'uuid';
import { DishOption } from 'src/app/shared/models/dish-option.model';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'admin-space-create-or-update-dish-modal',
  templateUrl: './create-or-update-dish-modal.component.html',
  styleUrls: ['./create-or-update-dish-modal.component.scss'],
})
export class CreateOrUpdateDishModalComponent implements OnInit {
  @Input() type?: ModalType;
  @Input() dish: Dish = {
    id: '',
    number: 0,
    name: '',
    thaiName: '',
    hotnessLevel: HotnessLevel.NOT_HOT,
    allergenes: [],
    category: dishCategories[0],
    description: '',
    options: [],
  };
  @Input() allergenes: Allergene[] = [];
  @Input() dishGroups: DishGroup[] = [];
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<Dish>();

  hotnessLevels = Object.values(HotnessLevel);
  dishCategories = dishCategories;

  SelectType = SelectType;
  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}

  mapOptionsToAllergenes(options: Option[]) {
    return options.map(
      (option) =>
        this.allergenes.find((allergene) => allergene.id === option.value)!
    );
  }

  mapOptionsToDishGroups(options: Option[]) {
    return options.map(
      (option) =>
        this.dishGroups.find((dishGroup) => dishGroup.id === option.value)!
    );
  }

  onClickAddDishOptionButton() {
    console.log(this.dish);
    this.dish.options.push({
      id: uuidv4(),
      letter: '',
      name: '',
      allergenes: [],
      price: 0,
    });
  }

  onClickRemoveDishOptionButton(dishOption: DishOption) {
    this.dish.options = this.dish.options.filter(
      (option) => option.id !== dishOption.id
    );
  }
}
