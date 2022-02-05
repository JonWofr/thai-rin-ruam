import { Allergene } from './allergene.model';

export interface DishOption {
  letter: string;
  name: string;
  allergenes: Allergene[];
  price: number;
}
