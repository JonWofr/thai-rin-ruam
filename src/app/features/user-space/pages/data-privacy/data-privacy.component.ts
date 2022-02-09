import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-space-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrls: ['./data-privacy.component.scss'],
})
export class DataPrivacyComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('Datenschutz – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
