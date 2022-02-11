import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/shared/data/news.data';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit {
  news: News = news[0];

  constructor() {}

  ngOnInit(): void {}
}
