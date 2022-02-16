import { DishCategory } from '../models/dish-category.model';

export const dishCategories: DishCategory[] = [
  {
    id: 'b3d8fc29-1eb8-4827-bd92-f52b62ab3632',
    name: 'Vorspeisen',
    imageUrl: '/assets/images/starters-category-image.jpg',
    description: 'Etwas Leichtes zu Beginn',
  },
  {
    id: '8df39b8a-b686-4023-9901-df67b92c2e42',
    name: 'Suppen',
    imageUrl: '/assets/images/soups-category-image.jpg',
    description: 'Darf nicht fehlen',
  },
  {
    id: 'bede7475-0bfd-4c6c-8976-8ad464a2322d',
    name: 'Vegetarisches',
    imageUrl: '/assets/images/vegetarian-category-image.jpg',
    description: 'Frisch aus dem Wok',
  },
  {
    id: '8cefba45-cce1-4713-a3d4-41d9f99ffa39',
    name: 'Hauptspeisen',
    imageUrl: '/assets/images/main-dishes-category-image.jpg',
    description: 'Mit Liebe zubereitet',
  },
  {
    id: '49c1ef19-c8f3-4e37-ab47-2459e79a51ac',
    name: 'Beilagen',
    imageUrl: '/assets/images/side-dishes-category-image.jpg',
    description: 'Reis, Nudeln und Co.',
  },
  {
    id: '47d41c09-1360-4dbb-a4b7-5ece093db727',
    name: 'Dessert',
    imageUrl: '/assets/images/desserts-category-image.jpeg',
    description: 'Etwas Süßes zum Schluss',
  },
  {
    id: 'f8cf436a-6ef3-4fb9-ae84-41de898d8943',
    name: 'Getränke',
    imageUrl: '/assets/images/drinks-category-image.jpg',
    description: 'Für den Durst',
  },
];
