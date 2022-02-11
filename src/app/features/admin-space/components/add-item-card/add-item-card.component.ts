import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-space-add-item-card',
  templateUrl: './add-item-card.component.html',
  styleUrls: ['./add-item-card.component.scss'],
})
export class AddItemCardComponent implements OnInit {
  clickAddItemCard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
