import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { Dish } from 'src/app/shared/models/dish.model';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'admin-space-create-or-update-allergene-modal',
  templateUrl: './create-or-update-allergene-modal.component.html',
  styleUrls: ['./create-or-update-allergene-modal.component.scss'],
})
export class CreateOrUpdateAllergeneModalComponent implements OnInit {
  @Input() type?: ModalType;
  @Input() allergene: Allergene = {
    id: '',
    abbreviation: '',
    name: '',
  };
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<Allergene>();

  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}
}
