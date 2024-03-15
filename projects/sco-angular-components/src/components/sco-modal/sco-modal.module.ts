import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoModalComponent } from './sco-modal.component';
import { ScoModalService } from './sco-modal.service';
import { ScoButtonModule } from '../sco-button/sco-button.module';

@NgModule({
  imports: [
    CommonModule,
    ScoClickOutsideModule,
    ScoButtonModule,
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
