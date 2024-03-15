import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoToggleComponent } from './sco-toggle.component';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoToggleComponent,
  ],
  exports: [
    ScoToggleComponent,
  ],
})
export class ScoToggleModule { }
