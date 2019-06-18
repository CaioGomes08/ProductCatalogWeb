import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  scrollItems: number[] = [];

  produtos: Product[] = [];

  ngOnInit() {
    for (let index = 0; index < 10000; index++) {
      this.scrollItems.push(index);
    }

    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
        .subscribe(res => {
         this.produtos = res;
        })
  }

}
