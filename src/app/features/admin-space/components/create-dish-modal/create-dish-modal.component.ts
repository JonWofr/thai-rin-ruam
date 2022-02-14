import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';

@Component({
  selector: 'admin-space-create-dish-modal',
  templateUrl: './create-dish-modal.component.html',
  styleUrls: ['./create-dish-modal.component.scss'],
})
export class CreateDishModalComponent implements OnInit {
  @Output() clickCloseButton = new EventEmitter<void>();
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickSaveButton = new EventEmitter<NgForm>();

  hotnessLevelKeyValuePairs = Object.entries(HotnessLevel);

  constructor() {}

  ngOnInit(): void {}
}
