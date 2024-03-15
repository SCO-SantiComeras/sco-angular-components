import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoLoadIframeDirective } from './sco-load-iframe.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [	
    ScoLoadIframeDirective,
   ],
  exports: [
    ScoLoadIframeDirective,
  ]
})
export class ScoLoadIframeModule { }
