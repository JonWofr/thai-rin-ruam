import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'admin-space-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title = '';
  @Input() isValid = false;
  @Input() type?: ModalType;
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();

  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}
}
