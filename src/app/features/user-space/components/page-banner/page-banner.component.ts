import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-space-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss'],
})
export class PageBannerComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';

  constructor() {}

  ngOnInit(): void {}
}
