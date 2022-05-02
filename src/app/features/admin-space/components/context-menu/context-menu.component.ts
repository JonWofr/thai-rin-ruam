import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-space-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {
  @Output() clickEditButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
