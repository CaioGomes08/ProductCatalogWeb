import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryService } from '../services/category.service';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ],
  declarations: [
    CategoryComponent,
    CreateCategoryComponent,
    SpinnerComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
