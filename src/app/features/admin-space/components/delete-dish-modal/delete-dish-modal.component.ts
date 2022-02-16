import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from 'src/app/shared/models/dish.model';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'admin-space-delete-dish-modal',
  templateUrl: './delete-dish-modal.component.html',
  styleUrls: ['./delete-dish-modal.component.scss'],
})
export class DeleteDishModalComponent implements OnInit {
  @Input() dish?: Dish;
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}
}
