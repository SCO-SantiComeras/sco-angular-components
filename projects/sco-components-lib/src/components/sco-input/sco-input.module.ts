import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoInputComponent } from './sco-input.component';
import { FormsModule } from '@angular/forms';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoClickOutsideModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoInputComponent,
  ],
  exports: [
    ScoInputComponent,
  ]
})
export class ScoInputModule { }
