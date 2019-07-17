import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner.component';
import { ComboCategoryComponent } from './combo-category/combo-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SpinnerComponent,
    ComboCategoryComponent
  ],
  exports:[
    SpinnerComponent,
    ComboCategoryComponent
  ]
})
export class ComponentsModule { }
