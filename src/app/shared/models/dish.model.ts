import { HotnessLevel } from '../enums/hotness-level.enum';
import { Allergene } from './allergene.model';
import { DishCategory } from './dish-category.model';
import { DishGroup } from './dish-group.model';
import { DishOption } from './dish-option.model';

export interface Dish {
  id: string;
  number: number;
  name: string;
  thaiName: string;
  price?: number;
  hotnessLevel: HotnessLevel;
  allergenes: Allergene[];
  category: DishCategory;
  group?: DishGroup;
  description: string;
  options: DishOption[];
}
