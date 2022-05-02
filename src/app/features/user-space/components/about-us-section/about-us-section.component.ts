import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-space-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
})
export class AboutUsSectionComponent implements OnInit {
  @Input() shouldHaveSectionHeader = true;

  constructor() {}

  ngOnInit(): void {}
}
