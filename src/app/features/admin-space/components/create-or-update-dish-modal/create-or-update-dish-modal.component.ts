import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { Option } from 'src/app/shared/models/option.model';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { DishGroup } from 'src/app/shared/models/dish-group.model';
import { SelectType } from '../../enums/select-type.enum';
import { Dish } from 'src/app/shared/models/dish.model';
import { v4 as uuidv4 } from 'uuid';
import { DishOption } from 'src/app/shared/models/dish-option.model';
import { ModalType } from '../../enums/modal-type.enum';
import { DishGroupsHelperService } from 'src/app/core/services/dish-groups-helper/dish-groups-helper.service';

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
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<Dish>();

  dishGroups: DishGroup[] = [];
  hotnessLevels = Object.values(HotnessLevel);
  dishCategories = dishCategories;

  SelectType = SelectType;
  ModalType = ModalType;

  constructor(private dishGroupsHelper: DishGroupsHelperService) {}

  ngOnInit(): void {
    this.dishGroupsHelper.fetchAll().subscribe((dishGroups: DishGroup[]) => {
      this.dishGroups = dishGroups;
    });
  }

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

  mapOptionToDishCategory(option: Option) {
    return this.dishCategories.find(
      (dishCategory) => dishCategory.id === option.value
    )!;
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

  async onClickCreateDishGroupButton(name: string) {
    const dishGroup: DishGroup = {
      id: '',
      name,
    };
    const docRef = await this.dishGroupsHelper.create(dishGroup);
    this.dish.group = {
      id: docRef.id,
      name,
    };
  }

  onClickDeleteDishGroupButton(option: Option) {
    const dishGroup = this.mapOptionsToDishGroups([option])[0];
    this.dishGroupsHelper.delete(dishGroup);
  }
}
