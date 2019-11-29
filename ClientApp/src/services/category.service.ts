import { Injectable, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../model/category.model';
import { ResultViewModel } from '../model/resultViewModel.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  cadastrou: EventEmitter<boolean> = new EventEmitter<boolean>();

  public getCategories() {
    return this.httpClient.get<Category[]>(`${environment.storeApi}/category`);
  }

  public getCategoryById(id: number) {
    return this.httpClient.get<Category>(`${environment.storeApi}/category/${id}`);
  }

  public createCategory(category: Category) {
    return this.httpClient.post<ResultViewModel>(`${environment.storeApi}/category`, category);
  }

  public updateCategory(category: Category) {
    return this.httpClient.put<ResultViewModel>(`${environment.storeApi}/category`, category);
  }

  public deleteCategory(id: number) {
    return this.httpClient.delete<ResultViewModel>(`${environment.storeApi}/category/${id}`);
  }
}
