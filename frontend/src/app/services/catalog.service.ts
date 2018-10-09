import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from '../interfaces/user-interface';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  getCategoryById(_id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
          _id
      }})
    };
    return this.http.get<IResponse>(
      'api/catalog/get-category-by-id',
      httpOptions
    );
  }

  getDescendants(item): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        item
      }})
    };
    return this.http.get<IResponse>(
      'api/catalog/get-descendants',
      httpOptions
    );
  }

  getAllDescendants(category, depth): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        category, depth
      }})
    };    return this.http.get<IResponse>(
      'api/catalog/get-all-descendants',
      httpOptions
    );
  }

  getMainMenu(): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/catalog/get-main-menu',
      httpOptions
    );
  }

  // New

  getAllParents(category_id): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams().set('category_id', category_id)
    };
    return this.http.get<IResponse>(
      'api/catalog/get-all-parents',
      httpOptions
    );
  }

}
