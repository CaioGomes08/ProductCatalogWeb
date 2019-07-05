import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../services/product.service';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule, 
    ProductRoutingModule,
    FormsModule,
    ScrollingModule,
    ComponentsModule
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
