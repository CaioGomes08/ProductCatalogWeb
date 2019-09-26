import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from './list-product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { ComponentsModule } from '../components/components.module';
import { PipeModule } from '../../pipes/pipe.module';
import { CategoryService } from 'src/services/category.service';



@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ScrollingModule,
    ComponentsModule,
    DataViewModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    PipeModule,
  ],

  declarations: [
    ProductComponent,
    CreateProductComponent,

  ],
  providers: [
    ProductService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CreateProductComponent),
    }
  ]
})
export class ProductModule { }
