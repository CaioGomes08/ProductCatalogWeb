import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/model/category.model';

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

  public identifier = `combo-category-${identifier++}`;

  @Input() value: any;
  // @Input() name: string;

  @Output() aoAlterarCategoria: EventEmitter<Category> = new EventEmitter<Category>();

  categories: Category[] = [];

  ngOnInit() {

    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
        .subscribe((result) => {
          this.categories = result;
        });
  }

  alterouCategoria(event) {
    this.aoAlterarCategoria.emit(event);
  }

}

let identifier = 0;


