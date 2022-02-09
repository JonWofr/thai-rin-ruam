import { DishCategory } from '../models/dish-category.model';

export const dishCategories: DishCategory[] = [
  {
    name: 'Vorspeisen',
    imageUrl: '/assets/images/starters-category-image.jpg',
    description: 'Etwas Leichtes zu Beginn',
  },
  {
    name: 'Suppen',
    imageUrl: '/assets/images/soups-category-image.jpg',
    description: 'Darf nicht fehlen',
  },
  {
    name: 'Vegetarisches',
    imageUrl: '/assets/images/vegetarian-category-image.jpg',
    description: 'Frisch aus dem Wok',
  },
  {
    name: 'Hauptspeisen',
    imageUrl: '/assets/images/main-dishes-category-image.jpg',
    description: 'Mit Liebe zubereitet',
  },
  {
    name: 'Beilagen',
    imageUrl: '/assets/images/side-dishes-category-image.jpg',
    description: 'Reis, Nudeln und Co.',
  },
  {
    name: 'Dessert',
    imageUrl: '/assets/images/desserts-category-image.jpeg',
    description: 'Etwas Süßes zum Schluss',
  },
  {
    name: 'Getränke',
    imageUrl: '/assets/images/drinks-category-image.jpg',
    description: 'Für den Durst',
  },
];
