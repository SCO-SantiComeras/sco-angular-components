import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoClickOutsideDirective } from './sco-click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoClickOutsideDirective,
   ],
   exports: [
    ScoClickOutsideDirective,
   ]
})
export class ScoClickOutsideModule { }
