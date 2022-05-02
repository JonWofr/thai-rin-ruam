import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-space-dish-category-tab-header',
  templateUrl: './dish-category-tab-header.component.html',
  styleUrls: ['./dish-category-tab-header.component.scss'],
})
export class DishCategoryTabHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';

  constructor() {}

  ngOnInit(): void {}
}
