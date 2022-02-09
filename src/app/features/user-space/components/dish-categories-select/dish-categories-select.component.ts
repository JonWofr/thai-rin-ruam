import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DishCategory } from 'src/app/shared/models/dish-category.model';

@Component({
  selector: 'user-space-dish-categories-select',
  templateUrl: './dish-categories-select.component.html',
  styleUrls: ['./dish-categories-select.component.scss'],
})
export class DishCategoriesSelectComponent implements OnInit {
  @Input() dishCategories: DishCategory[] = [];
  @Input() selectedDishCategory?: DishCategory;
  @Output() changeSelect = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
