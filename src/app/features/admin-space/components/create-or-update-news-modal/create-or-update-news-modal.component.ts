import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { authors } from 'src/app/shared/data/authors.data';
import { News } from 'src/app/shared/models/news.model';
import { ModalType } from '../../enums/modal-type.enum';
import { SelectType } from '../../enums/select-type.enum';
import { Option } from 'src/app/shared/models/option.model';

@Component({
  selector: 'admin-space-create-or-update-news-modal',
  templateUrl: './create-or-update-news-modal.component.html',
  styleUrls: ['./create-or-update-news-modal.component.scss'],
})
export class CreateOrUpdateNewsModalComponent implements OnInit {
  @Input() type?: ModalType;
  // Type is any because in order for the form to show defaults in an unfilled state everything
  // that is not type string needs to have null. But null is not compatible with type Dish. So
  // quick and dirty solution is to use any even though its use should be avoided.
  @Input() news: any = {
    id: '',
    title: '',
    text: '',
    creationDate: Timestamp.now(),
    imageUrls: [],
    author: null,
  };
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<News>();

  authors = authors;

  SelectType = SelectType;
  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}

  mapOptionToAuthor(option: Option) {
    return this.authors.find((author) => author.id === option.value)!;
  }
}
