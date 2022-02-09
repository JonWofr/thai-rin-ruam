import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-space-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('Über Uns – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
