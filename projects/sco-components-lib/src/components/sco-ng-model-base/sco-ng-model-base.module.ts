import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoNgModelBase } from './sco-ng-model-base.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoNgModelBase,
  ],
  exports: [
    ScoNgModelBase,
  ]
})
export class ScoNgModelBaseModule { }
