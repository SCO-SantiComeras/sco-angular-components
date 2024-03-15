import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoButtonModule } from '../sco-button/sco-button.module';
import { ScoMultipleButtonComponent } from './sco-multiple-button.component';

@NgModule({
  imports: [
    CommonModule,
    ScoButtonModule,
  ],
  declarations: [
    ScoMultipleButtonComponent
  ],
  exports: [
    ScoMultipleButtonComponent
  ]
})
export class ScoMultipleButtonModule { }
