import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoAccordionComponent } from './sco-accordion.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoAccordionComponent,
  ],
  exports: [
    ScoAccordionComponent,
  ],
})
export class ScoAccordionModule { }
