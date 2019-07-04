import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../services/product.service';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule, 
    ProductRoutingModule,
    FormsModule,
    ScrollingModule
  ],
  declarations: [
    ProductComponent,
    CreateProductComponent,
    SpinnerComponent
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
