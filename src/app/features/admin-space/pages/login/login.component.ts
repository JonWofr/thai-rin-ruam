import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { SpinnerControllerService } from '../../services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from '../../services/toast-controller/toast-controller.service';

@Component({
  selector: 'admin-space-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    title: Title,
    private spinnerController: SpinnerControllerService,
    private toastController: ToastControllerService,
    private router: Router,
    private auth: Auth
  ) {
    title.setTitle('Login – Admin-Bereich – Thai Rin Ruam');
  }

  ngOnInit(): void {}

  onSubmitLoginForm(loginForm: NgForm) {
    const { email, password }: { email: string; password: string } =
      loginForm.value;
    this.spinnerController.showSpinner();
    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.toastController.showSuccessToast('Erfolgreich eingeloggt!');
        this.router.navigateByUrl('/admin');
      })
      .catch((error: AuthError) => {
        switch (error.code) {
          case 'auth/user-not-found':
            this.toastController.showWarnToast('Benutzer nicht gefunden!');
            break;
          case 'auth/wrong-password':
            this.toastController.showWarnToast('Falsches Passwort!');
            break;
        }
      })
      .finally(() => {
        this.spinnerController.hideSpinner();
      });
  }
}
