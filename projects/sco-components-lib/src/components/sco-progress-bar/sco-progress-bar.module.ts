import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoProgressBarComponent } from './sco-progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoProgressBarComponent,
  ],
  exports: [
    ScoProgressBarComponent,
  ]
})
export class ScoProgressBarModule { }
