import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoToastComponent } from './component/sco-toast.component';
import { ScoToastService } from './sco-toast.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoToastComponent,
  ],
  exports: [
    ScoToastComponent,
  ],
  providers: [
    ScoToastService,
  ]
})
export class ScoToastModule { }
