import { Component, Input, OnInit } from '@angular/core';
import { HotnessLevel } from 'src/app/shared/enums/hotness-level.enum';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { Dish } from 'src/app/shared/models/dish.model';

@Component({
  selector: 'user-space-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() dish?: Dish;

  HotnessLevel = HotnessLevel;

  constructor() {}

  ngOnInit(): void {}
}
