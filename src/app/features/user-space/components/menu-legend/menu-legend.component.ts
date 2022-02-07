import { Component, Input, OnInit } from '@angular/core';
import { Allergene } from 'src/app/shared/models/allergene.model';

@Component({
  selector: 'user-space-menu-legend',
  templateUrl: './menu-legend.component.html',
  styleUrls: ['./menu-legend.component.scss'],
})
export class MenuLegendComponent implements OnInit {
  @Input() allergenes: Allergene[] = [];

  constructor() {}

  ngOnInit(): void {}
}
