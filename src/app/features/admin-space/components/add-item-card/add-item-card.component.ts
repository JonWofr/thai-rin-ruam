import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-space-add-item-card',
  templateUrl: './add-item-card.component.html',
  styleUrls: ['./add-item-card.component.scss'],
})
export class AddItemCardComponent implements OnInit {
  @Output() clickAddItemCard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
