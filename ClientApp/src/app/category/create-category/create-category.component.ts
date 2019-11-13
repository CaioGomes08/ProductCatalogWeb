import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from 'src/model/category.model';
import { CategoryService } from 'src/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  providers: [ToastrService]
})
export class CreateCategoryComponent implements OnInit, OnChanges {

  constructor(
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) { }

  category: Category = new Category();
  errors: object;
  cadastrando = false;

  @Input() categorySelecionada: Category = new Category();

  @ViewChild('btnClick') btnClick: ElementRef;


  ngOnInit() {

  }

  ngOnChanges() {
    this.editarCategory();
  }

  editarCategory() {
    if (this.categorySelecionada) {
      this.category.id = this.categorySelecionada.id;
      this.category.title = this.categorySelecionada.title;
      this.category.description = this.categorySelecionada.description;
    }
  }

  inicializarComponent() {
    setTimeout(() => {
      this.category = new Category();
      this.categorySelecionada = undefined;
      this.errors = undefined;
    }, 500);
  }

  cadastrar() {
    this.cadastrando = true;
    this.categoryService.createCategory(this.category)
      .pipe(finalize(() => this.cadastrando = false))
      .subscribe(result => {
        if (result.success) {
          this.categoryService.cadastrou.emit(true);
          Swal.fire({
            type: 'success',
            title: 'Sucesso!',
            text: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(_ => {
            this.inicializarComponent();
            this.closeModal();
          })
        } else {
          this.errors = result.data;
          this.toastrService.error(result.message, 'Erro', {
            progressBar: true,
            timeOut: 3000
          });
        }

      })
  }

  editar() {
    this.cadastrando = true;
    this.categoryService.updateCategory(this.category)
      .pipe(finalize(() => this.cadastrando = false))
      .subscribe(result => {
        if (result.success) {
          this.categoryService.cadastrou.emit(true);
          Swal.fire({
            type: 'success',
            title: 'Sucesso!',
            text: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(_ => {
            this.inicializarComponent();
            this.closeModal();
          })
        } else {
          this.errors = result.data;
          this.toastrService.error(result.message, "Erro", {
            progressBar: true,
            timeOut: 3000
          })
        }
      })
  }

  closeModal() {
    this.btnClick.nativeElement.click();
  }

}
