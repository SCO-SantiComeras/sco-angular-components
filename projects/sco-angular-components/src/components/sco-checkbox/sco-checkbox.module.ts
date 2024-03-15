import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoCheckboxComponent } from './sco-checkbox.component';
import { FormsModule } from '@angular/forms';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoCheckboxComponent,
  ],
  exports: [
    ScoCheckboxComponent,
  ]
})
export class ScoCheckboxModule { }
