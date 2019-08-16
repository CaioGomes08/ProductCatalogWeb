import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanatizePipe } from './sanatize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SanatizePipe
  ],
  exports: [
    SanatizePipe
  ]
})
export class PipeModule { }
