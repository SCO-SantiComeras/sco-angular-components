import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoIndicatorComponent } from './sco-indicator.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KnobModule,
  ],
  declarations: [
    ScoIndicatorComponent,
  ],
  exports: [
    ScoIndicatorComponent,
  ]
})
export class ScoIndicatorModule { }
