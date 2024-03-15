import { ScoTableService } from './sco-table.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoTableComponent } from './sco-table.component';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ScoClickOutsideModule,
    NgxPaginationModule,
  ],
  declarations: [
    ScoTableComponent,
  ],
  exports: [
    ScoTableComponent,
  ],
  providers: [
    ScoTableService,
  ]
})

export class ScoTableModule { }
