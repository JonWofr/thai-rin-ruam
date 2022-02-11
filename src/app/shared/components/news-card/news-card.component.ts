import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'shared-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news?: News;

  constructor() {}

  ngOnInit(): void {}
}
