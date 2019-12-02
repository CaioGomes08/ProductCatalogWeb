import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultViewModel } from '../model/resultViewModel.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Product, ProductViewModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  cadastrou: EventEmitter<boolean> = new EventEmitter<boolean>();

  public getProducts() {
    return this.httpClient.get<ProductViewModel>(`${environment.storeApi}/product`);
  }

  public getProductById(id: number) {
    return this.httpClient.get<Product>(`${environment.storeApi}/product/${id}`);
  }

  public createProduct(product: Product) {
    return this.httpClient.post<ResultViewModel>(`${environment.storeApi}/product`, product);
  }

  public deleteProduct(id: number) {
    return this.httpClient.delete<ResultViewModel>(`${environment.storeApi}/product/${id}`)
  }

  public updateProduct(product: Product){
    return this.httpClient.put<ResultViewModel>(`${environment.storeApi}/product`, product);
  }
}
