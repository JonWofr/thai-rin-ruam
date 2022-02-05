import { Component, OnInit } from '@angular/core';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { DishCategory } from 'src/app/shared/models/dish-category.model';

@Component({
  selector: 'user-space-dish-categories-section',
  templateUrl: './dish-categories-section.component.html',
  styleUrls: ['./dish-categories-section.component.scss'],
})
export class DishCategoriesSectionComponent implements OnInit {
  dishCategories: DishCategory[] = dishCategories;

  constructor() {}

  ngOnInit(): void {}
}
