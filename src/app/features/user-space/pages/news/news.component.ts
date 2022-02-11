import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { news } from 'src/app/shared/data/news.data';

@Component({
  selector: 'user-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news = news;

  constructor(title: Title) {
    title.setTitle('Aktuelles – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
