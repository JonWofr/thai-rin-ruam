import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thai-rin-ruam-new';

  ngOnInit(): void {
    // Default theme is light. Also default section padding is set.
    document.documentElement.classList.add(
      'light-theme',
      'default-section-padding'
    );
  }
}
