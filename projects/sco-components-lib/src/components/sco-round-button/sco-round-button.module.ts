import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoRoundButtonComponent } from './sco-round-button.component';
import { FormsModule } from '@angular/forms';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoRoundButtonComponent,
  ],
  exports: [
    ScoRoundButtonComponent,
  ]
})
export class ScoRoundButtonModule { }
