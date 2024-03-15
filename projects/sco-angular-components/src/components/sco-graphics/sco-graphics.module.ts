import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoGraphicsComponent } from './sco-graphics.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],
  declarations: [
    ScoGraphicsComponent,
  ],
  exports: [
    ScoGraphicsComponent,
  ]
})
export class ScoGraphicsModule { }
