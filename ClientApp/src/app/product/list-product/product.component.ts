import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

import { ProductService } from '../../../services/product.service';
import { Product, ProductViewModel } from '../../../model/product.model';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private sanitizer: DomSanitizer) { }
  scrollItems: number[] = [];

  produtos: ProductViewModel = new ProductViewModel();
  produtoSelecionado: Product = new Product();

  showSpinner = false;

  ngOnInit() {
    this.getProducts();
    this.productService.cadastrou
      .subscribe(res => {
        if (res) {
          this.getProducts();
        }
      });
  }

  getProducts() {
    this.showSpinner = true;
    this.productService.getProducts()
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(res => {
        this.produtos = res;
      }, (error: HttpErrorResponse) => {
        console.error(error);
        this.produtos = null;
      });
  }

  editar(id: number) {
    this.productService.getProductById(id)
      .subscribe(result => {
        if (result) {
          this.produtoSelecionado = result;
        }
      });
  }

  excluir(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você irá remover esse produto',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.value) {
        this.productService.deleteProduct(id)
          .subscribe(res => {
            if (res.success) {
              Swal.fire(
                'Excluido!',
                res.message,
                'success'
              );
              this.getProducts();
            }
          });
      }
    });
  }

}
