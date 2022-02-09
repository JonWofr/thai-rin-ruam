import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-space-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('Kontakt – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
