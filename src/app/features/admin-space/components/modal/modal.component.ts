import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-space-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title = '';
  @Output() clickCloseButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
