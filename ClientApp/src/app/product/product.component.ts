import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

import { ProductService } from '../services/product.service';
import { Product, ProductViewModel } from '../model/product.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private sanitizer: DomSanitizer) { }
  scrollItems: number[] = [];

  produtos: ProductViewModel[] = [];
  produto: ProductViewModel = new ProductViewModel();
  showSpinner: boolean = false;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.showSpinner = true;
    this.productService.getProducts()
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(res => {     
        res.forEach(value => {
          this.produto.category = value.category;
          this.produto.description = value.description;
          this.produto.id = value.id;
          this.produto.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + value.image);
          this.produto.price = value.price;
          this.produto.title = value.title;
          this.produtos.push(this.produto);
          this.produto = new ProductViewModel();
        })        
      }, (error: HttpErrorResponse) => {
        console.error(error);
        this.produtos = null;
      })
  }

}
