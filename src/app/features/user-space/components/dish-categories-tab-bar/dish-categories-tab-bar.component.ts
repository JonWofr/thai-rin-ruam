import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DishCategory } from 'src/app/shared/models/dish-category.model';

@Component({
  selector: 'user-space-dish-categories-tab-bar',
  templateUrl: './dish-categories-tab-bar.component.html',
  styleUrls: ['./dish-categories-tab-bar.component.scss'],
})
export class DishCategoriesTabBarComponent implements OnInit {
  @Input() dishCategories: DishCategory[] = [];
  @Input() selectedDishCategory?: DishCategory;
  @Output() changeTab = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
