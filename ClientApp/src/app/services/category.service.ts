import { Injectable, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Category } from '../model/category.model';
import { ResultViewModel } from '../model/resultViewModel.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: Http) { }

  cadastrou: EventEmitter<boolean> = new EventEmitter<boolean>();

  public getCategories(): Observable<Category[]>{
   return this.http.get(`${environment.storeApi}/category`)
              .pipe(
                map(response => {                
                  return response.json();                  
                })
              );
  }

  public getCategoryById(id: number): Observable<Category>{
    return this.http.get(`${environment.storeApi}/category/${id}`)
               .pipe(
                 map(response => {
                   return response.json();
                 })
               )
  }

  public createCategory(category: Category): Observable<ResultViewModel>{
    return this.http.post(`${environment.storeApi}/category`, category)
               .pipe(
                 map(response => {
                   return response.json();
                 })
               )
  }

  public updateCategory(category: Category): Observable<ResultViewModel>{
      return this.http.put(`${environment.storeApi}/category`, category)
                 .pipe(
                   map(response => {
                     return response.json();
                   })
                 )
  }

  public deleteCategory(id: number): Observable<ResultViewModel>{
    return this.http.delete(`${environment.storeApi}/category/${id}`)
               .pipe(
                 map(response => {
                   return response.json();
                 })
               )
  }
}
