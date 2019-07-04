import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-combo-category',
  templateUrl: './combo-category.component.html',
  styleUrls: ['./combo-category.component.css'],
  providers: [
    CategoryService
  ]
})
export class ComboCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  identifier: number = 0;

  @Input() value: any;

  @Output() aoAlterarCategoria: EventEmitter<Category> = new EventEmitter<Category>();

  categories: Category[] = [];

  ngOnInit() {
    this.identifier = 0;
  }

  getCategories(){
    this.categoryService.getCategories()
        .subscribe((result) => {
          this.categories = result;          
        });
  }

  alterouCategoria(event){
    this.aoAlterarCategoria.emit(event);
  }

}
