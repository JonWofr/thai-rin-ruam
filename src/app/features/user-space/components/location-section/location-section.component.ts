import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-space-location-section',
  templateUrl: './location-section.component.html',
  styleUrls: ['./location-section.component.scss'],
})
export class LocationSectionComponent implements OnInit {
  @Input() shouldHaveSectionHeader = true;

  constructor() {}

  ngOnInit(): void {}
}
