import { Component,  OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ValidateService } from '../../../services/validate.service';
import { MatSnackBar, MatStepper, MatVerticalStepper } from '@angular/material';
import { Router } from '@angular/router';
import { config } from '../../../app.config';


@Component({
  selector: 'app-user-password-reset',
  templateUrl: './user-password-reset.component.html',
  styleUrls: ['./user-password-reset.component.scss']
})
export class UserPasswordResetComponent implements OnInit {
  config = config;
  emailForm: FormGroup;
  codeForm: FormGroup;
  passwordForm: FormGroup;
  hidePassword = true;
  processing = false;
  result = false;

  @ViewChild('stepper') matStepper: MatStepper;
  @ViewChild('recaptchaRef') recaptchaRef;

  constructor(
    private userService: UserService,
    private validateService: ValidateService,
    private matSnackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    this.emailForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern(emailPattern),
      ]),
      recaptcha: new FormControl('', [
        Validators.required
      ])
      },
    );

    this.codeForm = new FormGroup({
        code: new FormControl('', [
          Validators.required,
        ]),
      },
    );

    this.passwordForm = new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z0-9]+'),
        ]),
        passwordConfirm: new FormControl('', [
          Validators.required,
        ]),
      },
      this.validateService.matchPassword
    );

  }

  onEmailSubmit(stepper) {
    this.processing = true;
    this.userService.userLocalRemoveToken('token');
    this.userService.userLocalRemoveToken('codeToken');
    this.userService.userLocalRemoveToken('passwordResetToken');

    const email = this.emailForm.get('email').value;
    const recaptcha = this.emailForm.get('recaptcha').value;
    this.userService.userPasswordResetEmail(email, recaptcha)
      .subscribe(
        result => {
          this.processing = false;
          this.emailForm.get('email').setErrors(null);
          this.matStepper.next();
          const codeToken = result.data;
          this.userService.userLocalSetToken('codeToken', codeToken);
        },
        err => {
          this.recaptchaRef.reset();
          this.processing = false;
          if (err.error === 'noSuchUser') {
            this.emailForm.get('email').setErrors({invalidEmail: true});
          } else {
            this.emailForm.get('email').setErrors({unrecognizedError: true});
          }
        }
      );
  }

  onCodeSubmit() {
    this.processing = true;
    const code = this.codeForm.get('code').value;

    const codeToken = this.userService.userLocalGetToken('codeToken');
    this.userService.userPasswordResetCode(code, codeToken)
      .subscribe(
        result => {
          this.processing = false;
          this.codeForm.get('code').setErrors(null);
          this.matStepper.next();
          this.userService.userLocalRemoveToken('codeToken');
          const passwordResetToken = result.data;
          this.userService.userLocalSetToken('passwordResetToken', passwordResetToken);
        },
        err => {
          this.processing = false;
          if (err.error === 'wrongCredentials') {
            this.codeForm.get('code').setErrors({invalidCode: true});
          } else if (err.error === 'maxTries') {
            this.codeForm.get('code').setErrors({maxTries: true});
            this.codeForm.setValidators(this.validateService.maxTries);
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
              this.matSnackBar.open('Код невірний, спрпобуйте пізніше', '',
              {duration: 4000, panelClass: 'snack-bar-danger'});
          } else {
            this.codeForm.get('code').setErrors({unrecognizedError: true});
            console.log(err);
          }
        }
      );
  }


  onPasswordSubmit() {
    this.processing = true;
    const password = this.passwordForm.get('password').value;
    const passwordResetToken = this.userService.userLocalGetToken('passwordResetToken');
    this.userService.userPasswordReset(password, passwordResetToken)
      .subscribe(result => {
          const token = result.data;
          this.processing = false;
          this.result = true;
          // this.matStepper.next();
          this.userService.userLocalRemoveToken('passwordResetToken');
          this.userService.userLocalLogin(token);
          this.router.navigate(['/user', 'profile']);
          this.matSnackBar.open(result.message, '',
            {duration: 3000, panelClass: 'snack-bar-danger'});
        },
        err => {
          this.processing = false;
          this.matSnackBar.open('Пароль не змінено', '',
            {duration: 3000, panelClass: 'snack-bar-danger'});
        }
      );
  }

  goHomePage() {
    this.router.navigate(['/']);
  }

}
