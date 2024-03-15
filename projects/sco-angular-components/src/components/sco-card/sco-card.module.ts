import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoCardComponent } from './sco-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoCardComponent,
  ],
  exports: [
    ScoCardComponent,
  ]
})

export class ScoCardModule { }
