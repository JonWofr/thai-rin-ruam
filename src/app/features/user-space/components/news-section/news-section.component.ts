import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit {
  news: News = {
    title: 'Nisi id mollit aute sint laboris excepteur anim.',
    date: new Date(),
    text: 'Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo. \n Nostrud ipsum officia laboris velit nulla ut incididunt sit. Cupidatat est laboris Lorem id sunt laboris sunt et nostrud sunt est commodo incididunt sint. Excepteur officia esse ea ea id aute minim velit laboris mollit elit in dolore commodo.',
    imageUrls: ['/assets/images/dish-1.jpeg', '/assets/images/dish-2.jpeg'],
    author: {
      name: 'Norbert Driessen',
      avatarUrl: '/assets/images/norbert.jpeg',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
