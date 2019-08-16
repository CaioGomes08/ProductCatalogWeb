import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../services/product.service';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { ComponentsModule } from '../components/components.module';
import { PipeModule } from '../pipes/pipe.module';



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
    PipeModule
  ],

  declarations: [
    ProductComponent,
    CreateProductComponent,

  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
