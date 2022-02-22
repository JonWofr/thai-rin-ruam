import { Component, OnInit } from '@angular/core';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';
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
    this.newsHelper.fetchAll().subscribe((news) => {
      this.isFetchingNews = false;
      if (news.length > 0) {
        this.news = news[0];
      }
    });
  }
}
