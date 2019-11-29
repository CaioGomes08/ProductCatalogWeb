import { Component, OnInit, OnChanges } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { finalize } from 'rxjs/operators';

import { Category } from '../../../model/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: []
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: Category[] = [];
  categorySelecionada: Category;
  showSpinner = false;

  ngOnInit() {
    this.buscarCategorias();
    this.categoryService.cadastrou
      .subscribe(novo => {
        if (novo) {
          this.buscarCategorias();
        }
      });
  }

  deleteCategory(id: number) {

    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você irá remover essa categoria',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.value) {
        this.categoryService.deleteCategory(id)
          .subscribe(res => {
            if (res) {
              Swal.fire(
                'Excluido!',
                res.message,
                'success'
              );
              this.buscarCategorias();
            }
          });
      }
    });
  }

  editar(id: number) {
    this.categoryService.getCategoryById(id)
      .subscribe(result => {
        if (result) {
          this.categorySelecionada = result;
        }
      });
  }

  buscarCategorias() {
    this.showSpinner = true;
    this.categoryService.getCategories()
      .pipe(finalize(() => { this.showSpinner = false; }))
      .subscribe(result => {
        if (result && result.length > 0) {
          this.categories = result;
        } else {
          this.categories = null;
        }
      }, error => {
        this.categories = null;
      });
  }

}
