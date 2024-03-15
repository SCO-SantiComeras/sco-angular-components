import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoButtonModule } from '../sco-button/sco-button.module';
import { ScoSplitButtonComponent } from './sco-split-button.component';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';

@NgModule({
  imports: [
    CommonModule,
    ScoButtonModule,
    ScoClickOutsideModule,
  ],
  declarations: [
    ScoSplitButtonComponent,
  ],
  exports: [
    ScoSplitButtonComponent,
  ]
})
export class ScoSplitButtonModule { }
