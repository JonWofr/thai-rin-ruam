import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';
import { ModalType } from '../../enums/modal-type.enum';
import { cloneDeep, take } from 'lodash';
import { Title } from '@angular/platform-browser';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  news: News[] = [];
  selectedNews?: News;
  @HostListener('document:click') onClickDocument() {
    if (this.currentlyVisibleModalType === null) {
      this.selectedNews = undefined;
    }
  }
  currentlyVisibleModalType: ModalType | null = null;
  isFetchingNews = false;
  endSubscriptions = new Subject<void>();

  ModalType = ModalType;

  constructor(title: Title, private newsHelper: NewsHelperService) {
    title.setTitle('Aktuelles – Admin-Bereich – Thai Rin Ruam');
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

  onClickMoreButton(selectedNews: News, event: MouseEvent) {
    this.selectedNews =
      this.selectedNews?.id === selectedNews.id
        ? undefined
        : cloneDeep(selectedNews);
    event.stopPropagation();
  }

  onClickAddItemCard() {
    this.currentlyVisibleModalType = ModalType.CREATE;
  }

  onClickContextMenuEditButton() {
    this.currentlyVisibleModalType = ModalType.UPDATE;
  }

  onClickContextMenuDeleteButton() {
    this.currentlyVisibleModalType = ModalType.DELETE;
  }

  onClickModalCloseButton() {
    this.currentlyVisibleModalType = null;
  }

  onClickModalCancelButton() {
    this.currentlyVisibleModalType = null;
  }

  async createNews(news: News) {
    await this.newsHelper.create(news);
    this.currentlyVisibleModalType = null;
  }

  async updateNews(news: News) {
    await this.newsHelper.update(news);
    this.currentlyVisibleModalType = null;
  }

  async deleteNews() {
    if (!this.selectedNews) return;
    await this.newsHelper.delete(this.selectedNews);
    this.currentlyVisibleModalType = null;
  }
}
