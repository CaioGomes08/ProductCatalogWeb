import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Product } from 'src/model/product.model';
import { Category } from 'src/model/category.model';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnChanges {



  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private sanitizer: DomSanitizer) { }

  product: Product = new Product();
  categories: Category[] = [];
  errors: object;
  cadastrando = false;

  @Input() produtoSelecionado: Product;

  imagemSelecionada: any = null;

  @ViewChild('btnClick') btnClick: ElementRef;
  @ViewChild('inputFile') inputFile: ElementRef;

  ngOnInit() {
    this.produtoSelecionado = undefined;
  }

  ngOnChanges() {
    this.editarProduct();
  }

  editarProduct() {
    if (this.produtoSelecionado.id) {
      this.categoryService.getCategoryById(this.produtoSelecionado.categoryId)
        .subscribe(res => {
          if (res) {
            // this.product.categoryId = res.id;
          }
        });
      this.imagemSelecionada = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + this.produtoSelecionado.image);
      this.product = this.produtoSelecionado;
    }
  }

  selecionouCategoria(event) {
    this.product.categoryId = event;
  }

  selecionouImagem(event) {

    if (event.target.files[0]) {
      const file = event.target.files[0];

      if (file != null) {
        const reader = new FileReader();
        reader.onload = (r: any) => {
          this.product.image = btoa(r.target.result);
        };
        reader.readAsBinaryString(file);

        reader.onloadend = () => {
          this.imagemSelecionada = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + this.product.image);
        };
      }
    } else {
      this.imagemSelecionada = null;
    }
  }

  inicializarComponent() {
    this.imagemSelecionada = null;
    this.produtoSelecionado = null;
    this.product = new Product();
    this.errors = undefined;
    this.inputFile.nativeElement.value = '';
  }

  cadastrar() {
    this.productService.createProduct(this.product)
      .subscribe((result) => {
        if (result.success) {
          this.productService.cadastrou.emit(true);
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
      });
    this.closeModal();
  }

  editar() {

  }

  closeModal() {
    this.btnClick.nativeElement.click();
  }
}
