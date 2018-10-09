import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/server-response-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SystemService {

  constructor(
    private http: HttpClient,
  ) { }

  getCloudinary() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/system/get-cloudinary',
      httpOptions
    );
  }
}
