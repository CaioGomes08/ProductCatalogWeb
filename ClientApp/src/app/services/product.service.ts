import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ResultViewModel } from '../model/resultViewModel.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  cadastrou: EventEmitter<boolean> = new EventEmitter<boolean>();

  public getProducts(): Observable<Product[]>{
    return this.http.get(`${environment.storeApi}/product`)
               .pipe(
                 map(response => {
                   return response.json();
                 })
               )
  }

  public createProduct(product: Product): Observable<ResultViewModel>{
    return this.http.post(`${environment.storeApi}/product`, product)
               .pipe(
                 map(response => {
                   return response.json();
                 })
               )
  }
}
