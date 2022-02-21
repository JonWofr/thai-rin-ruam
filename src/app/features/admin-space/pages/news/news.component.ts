import { Component, HostListener, OnInit } from '@angular/core';
import { news } from 'src/app/shared/data/news.data';
import { News } from 'src/app/shared/models/news.model';
import { ModalType } from '../../enums/modal-type.enum';
import { cloneDeep } from 'lodash';
import { Title } from '@angular/platform-browser';
import { NewsHelperService } from 'src/app/core/services/news-helper/news-helper.service';

@Component({
  selector: 'admin-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  selectedNews?: News;
  @HostListener('document:click') onClickDocument() {
    if (this.currentlyVisibleModalType === null) {
      this.selectedNews = undefined;
    }
  }
  currentlyVisibleModalType: ModalType | null = null;

  ModalType = ModalType;

  constructor(title: Title, private newsHelper: NewsHelperService) {
    title.setTitle('Aktuelles – Admin-Bereich – Thai Rin Ruam');
  }

  ngOnInit(): void {
    this.newsHelper.fetchAll().subscribe((news) => {
      this.news = news;
    });
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
