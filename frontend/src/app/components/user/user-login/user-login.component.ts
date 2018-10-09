import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IUser } from '../../../interfaces/user-interface';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { config } from '../../../app.config';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  config = config;
  userLoginForm: FormGroup;
  user: IUser;
  hidePassword = true;

  /**
   * directive for reset form (invalid status)
   */
  @ViewChild(FormGroupDirective) userCreateFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userLoginForm = new FormGroup({
        login: new FormControl('', [
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
        ]),
      },
    );
  }

  onUserLoginSubmit() {
    this.user = <IUser>{
      login: this.userLoginForm.get('login').value,
      password: this.userLoginForm.get('password').value,
    };

    this.userService.userLogin(this.user)
      .subscribe(
        result => {
          this.resetForm();
          const token = result.data;

          this.userService.userLocalLogin(token);
          this.matSnackBar.open(result.message, '', {duration: 3000});
          this.router.navigate(['/user', 'profile']);

        },
        err => {
          let message;
          if (err.error === 'maxTries') {
            message = 'Досягнуто максимальну кількість спроб, вхід тимчасово заблоковано';
          }
          this.matSnackBar.open(message || err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'});
        }
      );
  }

  resetForm() {
    if (this.userCreateFormDirective) {
      this.userCreateFormDirective.resetForm();
    }
  }

}
