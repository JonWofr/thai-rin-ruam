import { Component, HostListener, OnInit } from '@angular/core';
import { news } from 'src/app/shared/data/news.data';
import { News } from 'src/app/shared/models/news.model';
import { ModalType } from '../../enums/modal-type.enum';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'admin-space-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news = news;
  selectedNews?: News;
  @HostListener('document:click') onClickDocument() {
    if (this.currentlyVisibleModalType === null) {
      this.selectedNews = undefined;
    }
  }
  currentlyVisibleModalType: ModalType | null = null;

  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}

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

  onClickModalSaveButton() {}

  onClickModalDeleteButton() {}
}
