import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoFormCrudComponent } from './sco-form-crud.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoFormCrudComponent,
  ],
  exports: [
    ScoFormCrudComponent,
  ]
})
export class ScoFormCrudModule { }
