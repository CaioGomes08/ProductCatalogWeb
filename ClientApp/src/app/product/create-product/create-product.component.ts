import { Component, OnInit, OnChanges } from '@angular/core';

import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  

  constructor(private categoryService: CategoryService,
              private productService: ProductService) { }

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
    this.productService.createProduct(this.product)
        .subscribe((result) => {
          if(result.success){
            Swal.fire({
              type: 'success',
              title: 'Sucesso',
              text: result.message,
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            this.errors = result.data;
            Swal.fire({
              type: 'error',
              title: 'Erro',
              text: result.message,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
  }

  editar(){
    
  }
  
}
