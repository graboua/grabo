import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { AuthGuard } from '../../guards/auth.guard';
import { Page404Component } from '../shared/page-404/page-404.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'create',
        component: UserCreateComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'login',
        component: UserLoginComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
        data: { auth: 'guest' },
      },
      {
        path: 'password-reset',
        component: UserPasswordResetComponent,
      },
      { path: '', component: Page404Component },

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      userRoutes
    )],
  exports: [RouterModule]
})

export class UserRoutingModule {}
