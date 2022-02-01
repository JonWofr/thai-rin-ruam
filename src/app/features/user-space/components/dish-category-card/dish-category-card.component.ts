import { Component, Input, OnInit } from '@angular/core';
import { DishCategory } from 'src/app/shared/models/dish-category.model';

@Component({
  selector: 'user-space-dish-category-card',
  templateUrl: './dish-category-card.component.html',
  styleUrls: ['./dish-category-card.component.scss'],
})
export class DishCategoryCardComponent implements OnInit {
  @Input() dishCategory?: DishCategory;

  constructor() {}

  ngOnInit(): void {}
}
