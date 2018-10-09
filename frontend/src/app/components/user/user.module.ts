import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserDialogComponent,
    UserPasswordResetComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SharedModule,
  ],
  exports: [
  ],
  entryComponents: [
    UserDialogComponent,
  ]
})

export class UserModule { }
