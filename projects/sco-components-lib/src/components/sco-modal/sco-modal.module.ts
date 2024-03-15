import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoModalComponent } from './sco-modal.component';
import { ScoModalService } from './sco-modal.service';

@NgModule({
  imports: [
    CommonModule,
    ScoClickOutsideModule,
  ],
  declarations: [
    ScoModalComponent,
  ],
  exports: [
    ScoModalComponent,
  ],
  providers: [
    ScoModalService,
  ]
})
export class ScoModalModule { }
