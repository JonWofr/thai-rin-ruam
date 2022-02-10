import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ToastType } from './enums/toast-type.enum';
import { Toast } from './models/toast.model';
import { SpinnerControllerService } from './services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from './services/toast-controller/toast-controller.service';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.scss'],
})
export class AdminSpaceComponent implements OnInit {
  ToastType = ToastType;

  shouldShowSpinner = false;
  currentToast?: Toast;
  private toastQueue: Toast[] = [];
  private canShowToast = true;
  private endSubscriptions = new Subject<void>();

  constructor(
    private toastController: ToastControllerService,
    private spinnerController: SpinnerControllerService
  ) {}

  ngOnInit(): void {
    this.toastController.subject
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((toast) => this.handleToastAnimation(toast));
    this.spinnerController.subject
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe((shouldShowSpinner) => {
        this.shouldShowSpinner = shouldShowSpinner;
      });
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
  }

  async handleToastAnimation(toast: Toast) {
    if (this.canShowToast) {
      this.showToast(toast);
      // Set to the total amount of the CSS transition-duration plus a buffer of 50ms
      await this.setTimeoutPromise(3050);
      await this.hideToast();
      if (this.toastQueue.length > 0) {
        const nextToast = this.toastQueue.shift()!;
        this.handleToastAnimation(nextToast);
      }
    } else {
      this.toastQueue.push(toast);
    }
  }

  showToast(toast: Toast) {
    this.currentToast = toast;
    this.canShowToast = false;
  }

  setTimeoutPromise(ms: number): Promise<void> {
    return new Promise((resolve, _) => {
      setTimeout(resolve, ms);
    });
  }

  async hideToast() {
    this.currentToast = undefined;
    // Cooldown time
    await this.setTimeoutPromise(100);
    this.canShowToast = true;
  }
}
