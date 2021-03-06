import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './list-category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryService } from '../../services/category.service';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    CategoryComponent,
    CreateCategoryComponent,
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
