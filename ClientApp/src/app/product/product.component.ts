import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  scrollItems: number[] = [];

  produtos: Product[] = [];
  showSpinner: boolean = false;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.showSpinner = true;
    this.productService.getProducts()
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(res => {
        console.log(res)
        if (res && res.length > 0)
          this.produtos = res;        
        else
          this.produtos = null;
      }, (error: HttpErrorResponse) => {
        console.error(error);
        this.produtos = null;
      })
  }

}
