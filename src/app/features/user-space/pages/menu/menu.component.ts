import { Component, OnInit } from '@angular/core';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { dishes } from 'src/app/shared/data/dishes.data';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';
import { DishCategory } from 'src/app/shared/models/dish-category.model';
import { Dish } from 'src/app/shared/models/dish.model';

@Component({
  selector: 'user-space-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishCategories: DishCategory[] = dishCategories;
  selectedDishCategory: DishCategory = dishCategories[0];
  dishes = dishes;
  filteredDishes: Dish[] = [];

  constructor() {}

  ngOnInit(): void {}

  onChangeSelect(dishCategoryName: string) {
    this.selectedDishCategory =
      dishCategories.find(
        (dishCategory) => dishCategory.name === dishCategoryName
      ) ?? dishCategories[0];
    this.filteredDishes = this.filterDishesByCategory(
      this.dishes,
      this.selectedDishCategory
    );
    this.filteredDishes = this.sortDishesByNumber(this.filteredDishes);
  }

  filterDishesByCategory(dishes: Dish[], dishCategory: DishCategory) {
    return dishes.filter((dish) => dish.category.name === dishCategory.name);
  }

  sortDishesByNumber(dishes: Dish[]) {
    return dishes.sort(
      (previousDish, currentDish) => previousDish.number - currentDish.number
    );
  }

  groupDishes(dishes: Dish[]) {
    const dishGroups: { name: string; dishes: Dish[] }[] = [];
    dishes.forEach((dish) => {
      const dishGroup = dishGroups.find(
        (dishGroup) => dishGroup.name === dish.name
      );
      if (dishGroup) {
        dishGroup.dishes.push(dish);
      } else {
        dishGroups.push({
          name: dish.group.name,
          dishes: [dish],
        });
      }
    });
    return dishGroups;
  }
}
