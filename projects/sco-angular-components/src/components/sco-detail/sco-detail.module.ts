import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoDetailComponent } from './sco-detail.component';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';

@NgModule({
  imports: [
    CommonModule,
    ScoClickOutsideModule,
  ],
  declarations: [
    ScoDetailComponent,
  ],
  exports: [
    ScoDetailComponent,
  ]
})
export class ScoDetailModule { }
