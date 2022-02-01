import { Component, OnInit } from '@angular/core';
import { DishCategory } from 'src/app/shared/models/dish-category.model';

@Component({
  selector: 'user-space-dish-categories-section',
  templateUrl: './dish-categories-section.component.html',
  styleUrls: ['./dish-categories-section.component.scss'],
})
export class DishCategoriesSectionComponent implements OnInit {
  dishCategories: DishCategory[] = [
    {
      name: 'Vorspeisen',
      image: '/assets/images/starters-category-image.jpg',
    },
    {
      name: 'Suppen',
      image: '/assets/images/soups-category-image.jpg',
    },
    {
      name: 'Vegetarisches',
      image: '/assets/images/vegetarian-category-image.jpg',
    },
    {
      name: 'Hauptspeisen',
      image: '/assets/images/main-dishes-category-image.jpg',
    },
    {
      name: 'Beilagen',
      image: '/assets/images/side-dishes-category-image.jpg',
    },
    {
      name: 'Desserts',
      image: '/assets/images/desserts-category-image.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
