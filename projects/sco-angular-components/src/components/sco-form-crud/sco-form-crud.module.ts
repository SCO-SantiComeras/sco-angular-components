import { ScoCardModule } from './../sco-card/sco-card.module';
import { ScoClickOutsideModule } from './../../directives/sco-click-outside/sco-click-outside.module';
import { ScoBlockListModule } from './../sco-block-list/sco-block-list.module';
import { ScoTableModule } from './../sco-table/sco-table.module';
import { ScoButtonModule } from './../sco-button/sco-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoFormCrudComponent } from './sco-form-crud.component';
import { ScoModalModule } from './../sco-modal/sco-modal.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    ScoModalModule,
    ScoButtonModule,
    ScoTableModule,
    ScoBlockListModule,
    ScoClickOutsideModule,
    NgxPaginationModule,
    ScoCardModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoFormCrudComponent,
  ],
  exports: [
    ScoFormCrudComponent,
  ]
})
export class ScoFormCrudModule { }
