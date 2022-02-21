import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  isFetchingNews = false;

  constructor(title: Title, private newsHelper: NewsHelperService) {
    title.setTitle('Aktuelles – Thai Rin Ruam');
  }

  ngOnInit(): void {
    this.isFetchingNews = true;
    this.newsHelper.fetchAll().subscribe((news) => {
      this.isFetchingNews = false;
      this.news = news;
    });
  }
}
