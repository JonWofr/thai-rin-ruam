import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AllergenesHelperService } from 'src/app/core/services/allergenes-helper/allergenes-helper.service';
import { DishesHelperService } from 'src/app/core/services/dishes-helper/dishes-helper.service';
import { allergenes } from 'src/app/shared/data/allergenes.data';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { dishes } from 'src/app/shared/data/dishes.data';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { DishCategory } from 'src/app/shared/models/dish-category.model';
import { Dish } from 'src/app/shared/models/dish.model';
import { Option } from 'src/app/shared/models/option.model';

type DishGroup = { name: string | undefined; dishes: Dish[] };

@Component({
  selector: 'user-space-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  allergenes: Allergene[] = [];
  dishGroups: DishGroup[] = [];
  dishCategories: DishCategory[] = dishCategories;
  selectedDishCategory: DishCategory = dishCategories[0];
  isFetchingDishes = false;
  isFetchingAllergenes = false;

  Math = Math;

  constructor(
    private route: ActivatedRoute,
    title: Title,
    private dishesHelper: DishesHelperService,
    private allergenesHelper: AllergenesHelperService
  ) {
    title.setTitle('Speisekarte – Thai Rin Ruam');
  }

  ngOnInit(): void {
    const selectedDishCategoryId =
      this.route.snapshot.queryParamMap.get('categoryId');
    if (selectedDishCategoryId) {
      const selectedDishCategory = this.dishCategories.find(
        (dishCategory) => dishCategory.id === selectedDishCategoryId
      );
      if (selectedDishCategory) {
        this.selectedDishCategory = selectedDishCategory;
      }
    }

    this.isFetchingAllergenes = true;
    this.allergenesHelper.fetchAll().subscribe((allergenes) => {
      this.isFetchingAllergenes = false;
      this.allergenes = allergenes;
    });

    this.isFetchingDishes = true;
    this.dishesHelper.fetchAll().subscribe((dishes) => {
      this.isFetchingDishes = false;
      this.dishes = dishes;
      this.preprocessDishes();
    });
  }

  onChangeSelectedOption(selectedOption: Option): void {
    this.selectedDishCategory = this.dishCategories.find(
      (dishCategory) => dishCategory.id === selectedOption.value
    )!;
    this.preprocessDishes();
  }

  preprocessDishes() {
    let filteredDishes = this.filterDishesByCategory(
      this.dishes,
      this.selectedDishCategory
    );
    filteredDishes = this.sortDishesByNumber(filteredDishes);
    this.dishGroups = this.groupDishes(filteredDishes);
  }

  filterDishesByCategory(dishes: Dish[], dishCategory: DishCategory) {
    return dishes.filter((dish) => dish.category.name === dishCategory.name);
  }

  sortDishesByNumber(dishes: Dish[]) {
    return dishes.sort((previousDish, currentDish) => {
      if (!('number' in previousDish) && !('number' in currentDish)) {
        return 0;
      } else if ('number' in previousDish && !('number' in currentDish)) {
        return +1;
      } else if (!('number' in previousDish) && 'number' in currentDish) {
        return -1;
      } else {
        return previousDish.number! - currentDish.number!;
      }
    });
  }

  groupDishes(dishes: Dish[]) {
    const dishGroups: DishGroup[] = [];
    dishes.forEach((dish) => {
      const dishGroup = dishGroups.find(
        (dishGroup) => dishGroup.name === dish.group?.name
      );
      if (dishGroup) {
        dishGroup.dishes.push(dish);
      } else {
        dishGroups.push({
          name: dish.group?.name,
          dishes: [dish],
        });
      }
    });
    return dishGroups;
  }
}
