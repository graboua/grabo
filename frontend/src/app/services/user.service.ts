import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from '../interfaces/user-interface';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable ,  ReplaySubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { config } from '../app.config';

@Injectable()
export class UserService {
  user: IUser;
  private _logging: ReplaySubject<IUser> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) { }

  userPasswordResetEmail(email, recaptcha): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        email, recaptcha
      }})
    };
    return this.http.get<IResponse>(
      'api/user/password-reset-check-email',
      httpOptions
    );
  }

  userPasswordResetCode(code, codeToken): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': codeToken
      }),
      params: new HttpParams({ fromObject: {
        code,
      }})
    };
    return this.http.get<IResponse>(
      'api/user/password-reset-check-code',
      httpOptions
    );
  }

  userPasswordReset(password, passwordResetToken): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': passwordResetToken
      }),
      params: new HttpParams({ fromObject: {
        password,
      }})
    };
    return this.http.get<IResponse>(
      'api/user/password-reset',
      httpOptions
    );
  }

  userEmailVerification(): Observable<IResponse> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.get<IResponse>(
      'api/user/email-verification-send',
      httpOptions
    );
  }

  userCreate(user: IUser, recaptcha): Observable<IResponse> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      }),
      params: new HttpParams({ fromObject: {
          recaptcha
        }})
    };
    return this.http.post<IResponse>(
      'api/user/create',
      user,
      httpOptions
    );
  }

  userLogin(user: IUser): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        login: user.login,
        password: user.password
      }})
    };
    return this.http.get<IResponse>(
      'api/user/login',
      httpOptions
    );
  }

  userGetProfile(): Observable<IResponse> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      }),
    };
    return this.http.get<IResponse>(
      'api/user/profile',
      httpOptions
    );
  }

  userCheckRole(role): Observable<IResponse> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      }),
      params: new HttpParams({fromString: `role=${role}`})

    };
    return this.http.get<IResponse>(
      'api/user/role',
      httpOptions
    );
  }

  userEdit(data: {}): Observable<IResponse> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.put<IResponse>(
      'api/user/edit',
      data,
      httpOptions
    );
  }

  userEditAvatar(file): Observable<IResponse> {
  // uploadPic(file, user) {

    const formData: FormData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append('file[]', files[i]);
    // }

    formData.append('file', file, file.name);
    // if role manager or admin, allow to change avatar for user_id
    // if not, user changes it for itself
    // let user_id = user._id;
    // formData.append('user_id', user_id);

    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.put<IResponse>(
      'api/user/edit-avatar',
      formData,
      httpOptions
    );
  }

  checkFile(eventTarget): IResponse {
    if (!eventTarget.files[0]) {
      return ({success: false, message: 'Виберіть файл'});
    } else if (eventTarget.files[0].size > 8400000) {
      return ({success: false, message: 'Розмір файлу повинен бути менше 8Мб'});
    } else if (
      eventTarget.files[0].type !== 'image/jpg' &&
      eventTarget.files[0].type !== 'image/jpe' &&
      eventTarget.files[0].type !== 'image/jpeg' &&
      eventTarget.files[0].type !== 'image/bmp' &&
      eventTarget.files[0].type !== 'image/png' &&
      eventTarget.files[0].type !== 'image/webp') {
      return ({success: false, message: 'Виберіть інший тип файлу'});
    } else {
      return ({success: true,  message: ''});
    }
  }

  // create Observable for user login watch
  userLocalLogin(token) {
    if (token) {
      this.userLocalSetToken('token', token);
    }
    const user = this.userLocalGetCredentials('token');
    this._logging.next(user);
  }

  userLocalLogout() {
    this.userLocalRemoveToken('token');
    const user = null;
    this._logging.next(user);
  }

  getUserLocal(): Observable <IUser> {
    return this._logging.asObservable();
  }
  // end of observable



   /**
   * Token manipulations
   */

  userLocalSetToken(tokenKey, token): void {
    localStorage.setItem(tokenKey, token);
  }

  userLocalRemoveToken(tokenKey): void {
    localStorage.removeItem(tokenKey);
  }

  userLocalCheckExpiration(tokenKey): boolean {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      return true;
    }
    const helper = new JwtHelperService();
    if (helper.isTokenExpired(token)) {
      this.userLocalRemoveToken(tokenKey);
    }
    return helper.isTokenExpired(token);
  }

  userLocalGetToken(tokenKey): string {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      return '';
    }
    if (this.userLocalCheckExpiration(tokenKey)) {
      return '';
    }
    return token;
  }

  userLocalGetCredentials(tokenKey) {
    const token = this.userLocalGetToken(tokenKey);
    if (!token) {
      return null;
    }
    const helper = new JwtHelperService();
    return helper.decodeToken(token).sub;
  }

  userLocalGetExpirationDate(tokenKey): Date {
    const token = localStorage.getItem(tokenKey);
    const helper = new JwtHelperService();
    return helper.getTokenExpirationDate(token);
  }
}
