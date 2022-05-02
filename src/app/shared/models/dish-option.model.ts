import { Allergene } from './allergene.model';

export interface DishOption {
  id: string;
  letter: string;
  name: string;
  allergenes: Allergene[];
  price: number;
}
