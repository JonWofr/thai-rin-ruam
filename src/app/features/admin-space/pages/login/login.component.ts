import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'admin-space-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('Login – Admin-Bereich – Thai Rin Ruam');
  }

  ngOnInit(): void {}
}
