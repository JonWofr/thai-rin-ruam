import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { authors } from 'src/app/shared/data/authors.data';
import { dishCategories } from 'src/app/shared/data/dish-categories.data';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';
import { News } from 'src/app/shared/models/news.model';
import { ModalType } from '../../enums/modal-type.enum';
import { SelectType } from '../../enums/select-type.enum';

@Component({
  selector: 'admin-space-create-or-update-news-modal',
  templateUrl: './create-or-update-news-modal.component.html',
  styleUrls: ['./create-or-update-news-modal.component.scss'],
})
export class CreateOrUpdateNewsModalComponent implements OnInit {
  @Input() type?: ModalType;
  @Input() news: News = {
    id: '',
    title: '',
    text: '',
    date: new Date(),
    imageUrls: [],
    author: authors[0],
  };
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<News>();

  authors = authors;

  SelectType = SelectType;
  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}
}
