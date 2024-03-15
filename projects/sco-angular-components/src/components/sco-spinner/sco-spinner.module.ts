import { ScoSpinnerService } from './sco-spinner.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoSpinnerComponent } from './component/sco-spinner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoSpinnerComponent,
  ],
  exports: [
    ScoSpinnerComponent,
  ], 
  providers: [
    ScoSpinnerService,
  ]
})
export class ScoSpinnerModule { }
