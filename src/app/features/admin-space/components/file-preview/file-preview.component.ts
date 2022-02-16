import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-space-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent implements OnInit {
  @Input() imageUrl = '';
  @Output() clickRemoveButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
