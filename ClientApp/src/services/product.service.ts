import { Injectable, EventEmitter } from '@angular/core';
import { ResultViewModel } from '../model/resultViewModel.model';
import { environment } from 'src/environments/environment';
import { Product, ProductViewModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  cadastrou: EventEmitter<boolean> = new EventEmitter<boolean>();

  public getProducts(): Observable<ProductViewModel> {
    return this.httpClient.get<ProductViewModel>(`${environment.storeApi}/product`);
  }

  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.storeApi}/product/${id}`);
  }

  public createProduct(product: Product): Observable<ResultViewModel> {
    return this.httpClient.post<ResultViewModel>(`${environment.storeApi}/product`, product);
  }

  public deleteProduct(id: number): Observable<ResultViewModel> {
    return this.httpClient.delete<ResultViewModel>(`${environment.storeApi}/product/${id}`);
  }

  public updateProduct(product: Product): Observable<ResultViewModel> {
    return this.httpClient.put<ResultViewModel>(`${environment.storeApi}/product`, product);
  }
}
