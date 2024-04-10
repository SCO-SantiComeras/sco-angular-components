import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoFormErrorsService } from './sco-form-errors.service';
import { ScoFormErrorsPipe } from './sco-form-errors.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoFormErrorsPipe,
  ],
  exports: [
    ScoFormErrorsPipe,
  ],
  providers: [
    ScoFormErrorsService,
  ]
})
export class ScoFormErrorsModule { }
