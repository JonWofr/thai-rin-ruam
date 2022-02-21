import { Component, Input, OnInit } from '@angular/core';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';
import { news } from 'src/app/shared/data/news.data';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'user-space-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit {
  news?: News;

  isFetchingNews = false;

  constructor(private newsHelper: NewsHelperService) {}

  ngOnInit(): void {
    this.isFetchingNews = true;
    this.newsHelper.fetchLatest().subscribe((news) => {
      this.isFetchingNews = false;
      if (news.length > 0) {
        this.news = news[0];
      }
    });
  }
}
