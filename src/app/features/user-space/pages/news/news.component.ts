import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  news: News[] = [];
  isFetchingNews = false;
  endSubscriptions = new Subject<void>();

  constructor(title: Title, private newsHelper: NewsHelperService) {
    title.setTitle('Aktuelles – Thai Rin Ruam');
  }

  ngOnInit(): void {
    this.isFetchingNews = true;
    this.newsHelper
      .fetchAll()
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((news) => {
        this.isFetchingNews = false;
        this.news = news;
      });
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
  }
}
