import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allergenes } from 'src/app/shared/data/allergenes.data';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { dishes } from 'src/app/shared/data/dishes.data';
import { DishCategory } from 'src/app/shared/models/dish-category.model';
import { Dish } from 'src/app/shared/models/dish.model';

type DishGroup = { name: string | undefined; dishes: Dish[] };

@Component({
  selector: 'user-space-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishCategories: DishCategory[] = dishCategories;
  selectedDishCategory: DishCategory = dishCategories[0];
  dishes = dishes;
  dishGroups: DishGroup[] = [];
  allergenes = allergenes;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const selectedDishCategoryName =
      this.route.snapshot.queryParamMap.get('category');
    if (selectedDishCategoryName) {
      const selectedDishCategory = this.dishCategories.find(
        (dishCategory) => dishCategory.name === selectedDishCategoryName
      );
      if (selectedDishCategory) {
        this.selectedDishCategory = selectedDishCategory;
      }
    }

    let filteredDishes = this.filterDishesByCategory(
      this.dishes,
      this.selectedDishCategory
    );
    filteredDishes = this.sortDishesByNumber(filteredDishes);
    this.dishGroups = this.groupDishes(filteredDishes);
  }

  onChangeSelect(dishCategoryName: string) {
    this.selectedDishCategory =
      dishCategories.find(
        (dishCategory) => dishCategory.name === dishCategoryName
      ) ?? dishCategories[0];
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
    return dishes.sort(
      (previousDish, currentDish) => previousDish.number - currentDish.number
    );
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
    console.log(dishGroups);
    return dishGroups;
  }
}
