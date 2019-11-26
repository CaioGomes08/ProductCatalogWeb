import { Injectable, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../model/category.model';
import { ResultViewModel } from '../model/resultViewModel.model';
import {  HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  cadastrou: EventEmitter<boolean> = new EventEmitter<boolean>();

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public getCategories() {
    return this.httpClient.get(`${environment.storeApi}/category`, {headers: this.headers})
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  public getCategoryById(id: number) {
    return this.httpClient.get(`${environment.storeApi}/category/${id}`, {headers: this.headers})
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  public createCategory(category: Category) {
    return this.httpClient.post(`${environment.storeApi}/category`, category , {headers: this.headers})
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  public updateCategory(category: Category) {
    return this.httpClient.put(`${environment.storeApi}/category`, category , {headers: this.headers})
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  public deleteCategory(id: number) {
    return this.httpClient.delete(`${environment.storeApi}/category/${id}` , {headers: this.headers})
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}
