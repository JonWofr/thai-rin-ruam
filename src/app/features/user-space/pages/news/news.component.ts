import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News[] = [
    {
      title: 'Nisi id mollit aute sint laboris excepteur anim.',
      date: new Date(),
      text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
      imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
      author: {
        name: 'Norbert Driessen',
        avatarUrl: '/assets/images/norbert.jpeg',
      },
    },
    {
      title: 'Nisi id mollit aute sint laboris excepteur anim.',
      date: new Date(),
      text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
      imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
      author: {
        name: 'Norbert Driessen',
        avatarUrl: '/assets/images/norbert.jpeg',
      },
    },
    {
      title: 'Nisi id mollit aute sint laboris excepteur anim.',
      date: new Date(),
      text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
      imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
      author: {
        name: 'Norbert Driessen',
        avatarUrl: '/assets/images/norbert.jpeg',
      },
    },
    {
      title: 'Nisi id mollit aute sint laboris excepteur anim.',
      date: new Date(),
      text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
      imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
      author: {
        name: 'Norbert Driessen',
        avatarUrl: '/assets/images/norbert.jpeg',
      },
    },
    {
      title: 'Nisi id mollit aute sint laboris excepteur anim.',
      date: new Date(),
      text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
      imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
      author: {
        name: 'Norbert Driessen',
        avatarUrl: '/assets/images/norbert.jpeg',
      },
    },
    {
      title: 'Nisi id mollit aute sint laboris excepteur anim.',
      date: new Date(),
      text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
      imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
      author: {
        name: 'Norbert Driessen',
        avatarUrl: '/assets/images/norbert.jpeg',
      },
    },
  ];

  constructor(title: Title) {
    title.setTitle('Aktuelles – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
