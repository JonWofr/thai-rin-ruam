import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-space-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('Impressum – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
