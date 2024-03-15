import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';
import { ScoTextareaComponent } from './sco-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoTextareaComponent,
  ],
  exports: [
    ScoTextareaComponent,
  ]
})
export class ScoTextareaModule { }
