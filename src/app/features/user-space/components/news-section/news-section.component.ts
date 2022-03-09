import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit, OnDestroy {
  news: News[] = [];

  isFetchingNews = false;
  endSubscriptions = new Subject<void>();

  constructor(private newsHelper: NewsHelperService) {}

  ngOnInit(): void {
    this.isFetchingNews = true;
    this.newsHelper
      .fetchAll()
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((news) => {
        this.isFetchingNews = false;
        this.news = news.slice(0, 3);
      });
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
  }
}
