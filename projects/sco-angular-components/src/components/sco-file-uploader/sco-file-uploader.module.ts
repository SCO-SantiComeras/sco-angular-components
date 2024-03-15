import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoFileUploaderComponent } from './sco-file-uploader.component';
import { FormsModule } from '@angular/forms';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoNgModelBaseModule,
  ],
  declarations: [
    ScoFileUploaderComponent,
  ],
  exports: [
    ScoFileUploaderComponent,
  ],
  providers: [
  ]
})
export class ScoFileUploaderModule { }
