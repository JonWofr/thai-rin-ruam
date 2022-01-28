import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thai-rin-ruam-new';

  ngOnInit(): void {
    // Default theme is light
    document.documentElement.classList.add('light-theme');
  }
}
