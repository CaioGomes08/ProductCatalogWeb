import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private sanitizer: DomSanitizer) { }

  product: Product = new Product();
  categories: Category[] = [];
  errors: object;
  cadastrando: boolean = false;

  imagemSelecionada: any;

  @ViewChild('btnClick') btnClick: ElementRef;

  ngOnInit() {
    this.getCategories();
  }

  // ngOnChanges(){
  //   this.getCategories();
  // }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((result) => {
        this.categories = result;
      });
  }

  selecionouCategoria(event) {
    this.product.categoryId = event;
  }

  selecionouImagem(event) {
   
    if (event.target.files[0]) {
      let file = event.target.files[0]

      if (file != null) {
        let reader = new FileReader();
        reader.onload = (r: any) => {
          this.product.image = btoa(r.target.result);
        }
        reader.readAsBinaryString(file);

        reader.onloadend = () => {
          this.imagemSelecionada = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + this.product.image)
        }
      }
    } else {
      this.imagemSelecionada = null
    }



  }

  inicializarComponent() {
    this.product = new Product();
    this.errors = undefined;
  }

  cadastrar() {
    this.productService.createProduct(this.product)
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            type: 'success',
            title: 'Sucesso',
            text: result.message,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
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
    this.closeModal();
  }

  editar() {

  }

  closeModal() {
    this.btnClick.nativeElement.click();
  }
}
