import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IResponse } from '../interfaces/server-response-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { IUser } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private _shareEvent: ReplaySubject<any> = new ReplaySubject(1);
  shareEvent$ = this._shareEvent.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  // sharing data between components
  sharingEvent(x) {
    this._shareEvent.next(x);
  }

  getSharingEvent() {
    return this.shareEvent$;
  }

  // sending feedback message
  sendFeedbackMessage(feedback, recaptcha): Observable<IResponse> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        }),
        params: new HttpParams({ fromObject: {
            recaptcha
          }})
      };
    return this.http.post<IResponse>(
      'api/shared/send-feedback-message',
      feedback,
      httpOptions
    );
  }
}

// ['updateDesigns'] design-item-component => design-editor-component
// ['closeSidenav'] design-popup-component => app-component