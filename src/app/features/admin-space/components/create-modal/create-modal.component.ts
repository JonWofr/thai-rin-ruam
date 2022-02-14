import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admin-space-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit {
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<NgForm>();
  @Output() clickCancelButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
