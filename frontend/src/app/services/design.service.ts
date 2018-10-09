import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { IResponse } from '../interfaces/server-response-interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs/index';
import { IProduct } from '../interfaces/product-interface';
import { IDesign } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  getDesigns() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/design/get-designs',
      httpOptions
    );
  }

  getDesignById(_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/design/get-design-by-id/' + _id,
      httpOptions
    );
  }

  designAddImagesBatch(file, design_id, structure): Observable<IResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('design_id', design_id);
    formData.append('structure', structure);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/design/add-images-batch',
      formData,
      httpOptions
    );
  }

  designAddImage(file, design_id): Observable<IResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('design_id', design_id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/design/add-image',
      formData,
      httpOptions
    );
  }

  designUpsert(design: IDesign): Observable<IResponse> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/design/upsert',
      design,
      httpOptions
    );
  }

  designDelete(_id): Observable<IResponse> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.delete<IResponse>(
      'api/design/delete/' + _id,
      httpOptions
    );
  }

}
