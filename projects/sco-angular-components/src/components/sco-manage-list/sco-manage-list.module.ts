import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoManageListComponent } from './sco-manage-list.component';
import { FormsModule } from '@angular/forms';
import { ScoButtonModule } from '../sco-button/sco-button.module';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';
import { ScoInputModule } from '../sco-input/sco-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoInputModule,
    ScoButtonModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoManageListComponent,
  ],
  exports: [
    ScoManageListComponent,
  ]
})
export class ScoManageListModule { }
