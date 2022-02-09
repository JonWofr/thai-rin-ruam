import { HotnessLevel } from '../enums/hotness-level.enum';
import { Dish } from '../models/dish.model';
import { dishCategories } from './dish-categories.data';

export const dishes: Dish[] = [
  {
    number: 4,
    name: 'Nisi elit dolore sint tempor.',
    thaiName: 'ปอเปี๊ย',
    price: 9.99,
    hotnessLevel: HotnessLevel.HOT,
    allergenes: [
      {
        name: 'Milcherzeugnisse',
        abbreviation: 'A',
      },
      {
        name: 'Nusserzeugnisse',
        abbreviation: 'B',
      },
    ],
    category: dishCategories[0],
    group: {
      name: 'Thai-Curries',
    },
    description:
      'Cupidatat aute pariatur fugiat incididunt sunt et eiusmod nisi minim.',
    options: [
      {
        letter: 'a',
        name: 'Mit Hühnchen',
        allergenes: [],
        price: 4.99,
      },
    ],
  },
  {
    number: 5,
    name: 'Lorem duis magna eu ullamco excepteur.',
    thaiName: 'ปอเปี๊ย',
    price: 19.99,
    hotnessLevel: HotnessLevel.VERY_HOT,
    allergenes: [
      {
        name: 'Milcherzeugnisse',
        abbreviation: 'A',
      },
    ],
    category: dishCategories[0],
    group: {
      name: 'Thai-Curries',
    },
    description: 'Cupidatat ad velit ex ut fugiat proident cupidatat.',
    options: [],
  },
  {
    number: 2,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    price: 3.99,
    hotnessLevel: HotnessLevel.NOT_HOT,
    allergenes: [
      {
        name: 'Milcherzeugnisse',
        abbreviation: 'A',
      },
      {
        name: 'Nusserzeugnisse',
        abbreviation: 'B',
      },
      {
        name: 'Fisch',
        abbreviation: 'C',
      },
      {
        name: 'Hühnchen',
        abbreviation: 'D',
      },
    ],
    category: dishCategories[0],
    group: {
      name: 'Thai-Curries',
    },
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [
      {
        letter: 'a',
        name: 'Mit Hühnchen',
        allergenes: [
          {
            name: 'Milcherzeugnisse',
            abbreviation: 'A',
          },
          {
            name: 'Nusserzeugnisse',
            abbreviation: 'B',
          },
        ],
        price: 4.99,
      },
      {
        letter: 'c',
        name: 'Mit Garnelen',
        allergenes: [],
        price: 4.99,
      },
      {
        letter: 'b',
        name: 'Mit Rind',
        allergenes: [],
        price: 4.99,
      },
    ],
  },
  {
    number: 1,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    price: 3.99,
    hotnessLevel: HotnessLevel.EXTREMELY_HOT,
    allergenes: [
      {
        name: 'Milcherzeugnisse',
        abbreviation: 'A',
      },
      {
        name: 'Nusserzeugnisse',
        abbreviation: 'B',
      },
      {
        name: 'Fisch',
        abbreviation: 'C',
      },
    ],
    category: dishCategories[0],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [
      {
        letter: 'a',
        name: 'Mit Hühnchen',
        allergenes: [
          {
            name: 'Milcherzeugnisse',
            abbreviation: 'A',
          },
          {
            name: 'Nusserzeugnisse',
            abbreviation: 'B',
          },
        ],
        price: 4.99,
      },
      {
        letter: 'c',
        name: 'Mit Garnelen',
        allergenes: [],
        price: 4.99,
      },
      {
        letter: 'b',
        name: 'Mit Rind',
        allergenes: [],
        price: 4.99,
      },
    ],
  },

  {
    number: 3,
    name: 'Aliqua ad dolor ut Lorem nisi laborum.',
    thaiName: 'ปอเปี๊ย',
    hotnessLevel: HotnessLevel.NOT_HOT,
    price: 4.99,
    allergenes: [
      {
        name: 'Milcherzeugnisse',
        abbreviation: 'A',
      },
      {
        name: 'Nusserzeugnisse',
        abbreviation: 'B',
      },
      {
        name: 'Fisch',
        abbreviation: 'C',
      },
    ],
    category: dishCategories[0],
    description:
      'Aliqua enim dolor aliquip aute veniam magna tempor incididunt dolore qui ea tempor.',
    options: [],
  },
  {
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
