import { ScoResolutionService } from './sco-resolution.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoResolutionDirective } from './sco-resolution.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoResolutionDirective,
  ],
  exports: [
    ScoResolutionDirective,
  ],
  providers: [
    ScoResolutionService,
  ]
})
export class ScoResolutionModule { }
