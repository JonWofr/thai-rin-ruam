import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'admin-space-delete-news-modal',
  templateUrl: './delete-news-modal.component.html',
  styleUrls: ['./delete-news-modal.component.scss'],
})
export class DeleteNewsModalComponent implements OnInit {
  @Input() news?: News;
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}
}
