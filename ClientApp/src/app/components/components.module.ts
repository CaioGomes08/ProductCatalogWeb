import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner.component';
import { ComboCategoryComponent } from './combo-category/combo-category.component';
import { ProductComponent } from '../product/list-product/product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SpinnerComponent,
    ComboCategoryComponent
  ],
  exports: [
    SpinnerComponent,
    ComboCategoryComponent
  ],
})
export class ComponentsModule { }
