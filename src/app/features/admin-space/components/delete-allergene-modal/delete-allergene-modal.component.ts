import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'admin-space-delete-allergene-modal',
  templateUrl: './delete-allergene-modal.component.html',
  styleUrls: ['./delete-allergene-modal.component.scss'],
})
export class DeleteAllergeneModalComponent implements OnInit {
  @Input() allergene?: Allergene;
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  ModalType = ModalType;
  constructor() {}

  ngOnInit(): void {}
}
