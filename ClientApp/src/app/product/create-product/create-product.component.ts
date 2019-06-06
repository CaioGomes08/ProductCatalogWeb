import { Component, OnInit, OnChanges } from '@angular/core';

import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  

  constructor(private categoryService: CategoryService) { }

  product: Product = new Product();
  categories: Category[] = [];
  errors: object;
  cadastrando: boolean = false;

  ngOnInit() {
    this.getCategories();
  }

  // ngOnChanges(){
  //   this.getCategories();
  // }

  getCategories(){
    this.categoryService.getCategories()
        .subscribe((result) => {
          this.categories = result;          
        });
  }
  
  inicializarComponent(){  
    this.product = new Product();
    this.errors = undefined;
  }

  cadastrar(){
    console.log(this.product);
  }
  
}
