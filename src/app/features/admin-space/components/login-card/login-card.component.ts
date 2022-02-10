import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastType } from '../../enums/toast-type.enum';
import { SpinnerControllerService } from '../../services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from '../../services/toast-controller/toast-controller.service';

@Component({
  selector: 'admin-space-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  constructor(
    private toastController: ToastControllerService,
    private spinnerController: SpinnerControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.spinnerController.subject.next(true);
    setTimeout(() => {
      this.spinnerController.subject.next(false);
      this.toastController.subject.next({
        type: ToastType.SUCCESS,
        message: 'Erfolgreich eingelogt',
      });
      this.router.navigateByUrl('/admin');
    }, 1000);
  }
}
