import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-space-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {
  @Output() changeFileInput = new EventEmitter<FileList | null>();

  constructor() {}

  ngOnInit(): void {}
}
