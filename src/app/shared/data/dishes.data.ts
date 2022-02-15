import { HotnessLevel } from '../enums/hotness-level.enum';
import { Dish } from '../models/dish.model';
import { dishCategories } from './dish-categories.data';
import { allergenes } from './allergenes.data';
import { dishGroups } from './dish-groups.data';

export const dishes: Dish[] = [
  {
    id: '0fc4cd3e-5276-4f2d-b88a-67150e37d754',
    number: 4,
    name: 'Nisi elit dolore sint tempor.',
    thaiName: 'ปอเปี๊ย',
    price: 9.99,
    hotnessLevel: HotnessLevel.HOT,
    allergenes: [allergenes[0], allergenes[1]],
    category: dishCategories[0],
    group: dishGroups[0],
    description:
      'Cupidatat aute pariatur fugiat incididunt sunt et eiusmod nisi minim.',
    options: [
      {
        id: '587c4791-2472-45bc-8470-ed7d0882d6c0',
        letter: 'a',
        name: 'Mit Hühnchen',
        allergenes: [],
        price: 4.99,
      },
    ],
  },
  {
    id: 'b39566d4-09b5-4f41-8735-53f76265cd21',
    number: 5,
    name: 'Lorem duis magna eu ullamco excepteur.',
    thaiName: 'ปอเปี๊ย',
    price: 19.99,
    hotnessLevel: HotnessLevel.VERY_HOT,
    allergenes: [allergenes[2]],
    category: dishCategories[0],
    group: dishGroups[0],
    description: 'Cupidatat ad velit ex ut fugiat proident cupidatat.',
    options: [],
  },
  {
    id: 'c707a3cc-a72b-42ec-be4c-d76d2cb0aecb',
    number: 2,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    price: 3.99,
    hotnessLevel: HotnessLevel.NOT_HOT,
    allergenes: [allergenes[0], allergenes[1], allergenes[2], allergenes[3]],
    category: dishCategories[0],
    group: dishGroups[0],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [
      {
        id: '1cc90120-581d-4c18-84b2-017009379316',
        letter: 'a',
        name: 'Mit Hühnchen',
        allergenes: [allergenes[0], allergenes[3]],
        price: 4.99,
      },
      {
        id: '9ee71eca-b335-4eea-818a-5fad2d95a535',
        letter: 'c',
        name: 'Mit Garnelen',
        allergenes: [],
        price: 4.99,
      },
      {
        id: '0adb475e-1fec-4873-a30f-3e382da64bfb',
        letter: 'b',
        name: 'Mit Rind',
        allergenes: [],
        price: 4.99,
      },
    ],
  },
  {
    id: 'c2ac204e-4f81-498d-bdac-f15a6022b719',
    number: 1,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    price: 3.99,
    hotnessLevel: HotnessLevel.EXTREMELY_HOT,
    allergenes: [allergenes[0], allergenes[1], allergenes[2], allergenes[4]],
    category: dishCategories[0],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [
      {
        id: '39375e04-b391-43d4-b5d3-b07c530a6f47',
        letter: 'a',
        name: 'Mit Hühnchen',
        allergenes: [allergenes[3], allergenes[4]],
        price: 4.99,
      },
      {
        id: '42f9bea9-ee19-4ac8-94c6-2e6dac0afbed',
        letter: 'c',
        name: 'Mit Garnelen',
        allergenes: [],
        price: 4.99,
      },
      {
        id: '67b2f5fb-e5b7-40cf-95f2-b2e1425ba34f',
        letter: 'b',
        name: 'Mit Rind',
        allergenes: [],
        price: 4.99,
      },
    ],
  },
  {
    id: '2f0df386-75b6-4681-96c8-99e7254c80a1',
    number: 3,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    hotnessLevel: HotnessLevel.NOT_HOT,
    price: 4.99,
    allergenes: [allergenes[4]],
    category: dishCategories[0],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [],
  },
  {
    id: 'cc22da2d-b32e-419a-856f-bfbc0a913cef',
    number: 7,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    hotnessLevel: HotnessLevel.NOT_HOT,
    price: 4.99,
    allergenes: [],
    category: dishCategories[1],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [],
  },
  {
    id: 'c6ae4560-76a8-420c-901f-1a1efea575f2',
    number: 6,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    hotnessLevel: HotnessLevel.NOT_HOT,
    price: 4.99,
    allergenes: [],
    category: dishCategories[1],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [],
  },
];
