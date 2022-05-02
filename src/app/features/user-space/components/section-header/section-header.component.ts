import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-space-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() style: 'primary-accent-color' | 'secondary-accent-color' =
    'primary-accent-color';

  constructor() {}

  ngOnInit(): void {}
}
