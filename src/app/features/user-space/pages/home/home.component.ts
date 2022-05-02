import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-space-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
