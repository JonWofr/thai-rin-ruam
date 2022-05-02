import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-space-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() label = '';
  @Output() clickChip = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
