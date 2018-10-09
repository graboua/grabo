import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFeedback } from '../../../interfaces/interface';
import { Location } from '@angular/common';
import { SharedService } from '../../../services/shared.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: IFeedback;
  @ViewChild('fForm') fFormDirective: FormGroupDirective;
  processing = false;

  constructor(
    private location: Location,
    private sharedService: SharedService,
    private matSnackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      contacts: new FormControl('', [
        Validators.required,
      ]),
      recaptcha: new FormControl('', [
        Validators.required
      ])
    });
  }

  onFeedbackFormSubmit() {
    this.processing = true;
    this.feedback = this.feedbackForm.value;
    this.sharedService.sendFeedbackMessage(this.feedback, this.feedbackForm.get('recaptcha').value)
      .subscribe(
        res => {
          this.matSnackBar.open('Повідомлення надіслано. Ми зв\'яжемось з вами найближчим часом', '',
            {duration: 5000});
          this.processing = false;
          this.resetForm();
          this.location.back();

        },
        err => {
          this.processing = false;
          this.matSnackBar.open('Сталася помилка. Повідомлення не надіслано. Спробуйте пізнше', '',
            {duration: 3000, panelClass: 'warn'});
        }
        );
  }

  resetForm() {
    if (this.fFormDirective) {
      this.fFormDirective.resetForm();
    }
  }

}
