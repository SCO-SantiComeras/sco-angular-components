import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoBlockListComponent } from './sco-block-list/sco-block-list.component';
import { ScoBlockListDataItemComponent } from './sco-block-list-data-item/sco-block-list-data-item.component';
import { ScoBlockListItemComponent } from './sco-block-list-item/sco-block-list-item.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ScoClickOutsideModule,
    NgxPaginationModule,
  ],
  declarations: [
    ScoBlockListComponent,
    ScoBlockListDataItemComponent,
    ScoBlockListItemComponent,
  ],
  exports: [
    ScoBlockListComponent,
    ScoBlockListDataItemComponent,
    ScoBlockListItemComponent,
  ],
  providers: [

  ]
})
export class ScoBlockListModule { }
