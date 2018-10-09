import { of as observableOf,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const requiredRole = next.data.auth; // from routing.module
    return this.userService.userCheckRole(requiredRole).pipe(
      map(permission => permission.data),
      catchError(err => observableOf(false)),);

  }
}
