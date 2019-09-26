import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './list-product/product.component';

const routes: Routes = [
  {path: '', component: ProductComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[ RouterModule ]
})
export class ProductRoutingModule { }
