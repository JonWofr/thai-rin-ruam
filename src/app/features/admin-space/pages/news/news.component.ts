import { Component, HostListener, OnInit } from '@angular/core';
import { news } from 'src/app/shared/data/news.data';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'admin-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news = news;
  selectedNews?: News;
  @HostListener('document:click') onClickDocument() {
    this.selectedNews = undefined;
  }

  constructor() {}

  ngOnInit(): void {}

  onClickMoreButton(selectedNews: News, event: MouseEvent) {
    this.selectedNews =
      this.selectedNews?.id === selectedNews.id ? undefined : selectedNews;
    event.stopPropagation();
  }
}
