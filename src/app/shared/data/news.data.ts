import { Timestamp } from '@angular/fire/firestore';
import { News } from '../models/news.model';
import { authors } from './authors.data';

export const news: News[] = [
  {
    id: '2a46459b-3697-4452-8de4-cc9694914c8c',
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    creationDate: Timestamp.now(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: authors[0],
  },
  {
    id: '79f99b54-1032-464d-a413-4e439b6e94e9',
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    creationDate: Timestamp.now(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: authors[0],
  },
  {
    id: 'f52554d2-73e0-4cb7-af9e-81c09e4ae3a5',
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    creationDate: Timestamp.now(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: authors[1],
  },
  {
    id: '2a746e37-b5fa-48da-a37a-7dfb06928f94',
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    creationDate: Timestamp.now(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: authors[1],
  },
  {
    id: '1754eb28-73b2-4e5a-a21d-2b687086f243',
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    creationDate: Timestamp.now(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: authors[0],
  },
  {
    id: '2ce9c5ea-1d72-4b4a-a596-6880d1898f14',
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    creationDate: Timestamp.now(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: authors[1],
  },
];
