import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {path: '', component: CategoryComponent}
]

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})


export class CategoryRoutingModule { }
