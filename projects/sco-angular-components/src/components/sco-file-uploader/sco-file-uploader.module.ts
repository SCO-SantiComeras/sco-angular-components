import { ScoJoinPipeModule } from './../../pipes/sco-join-pipe/sco-join-pipe.module';
import { ScoJoinPipe } from './../../pipes/sco-join-pipe/sco-join.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoFileUploaderComponent } from './sco-file-uploader.component';
import { FormsModule } from '@angular/forms';
import { ScoNgModelBaseModule } from '../sco-ng-model-base/sco-ng-model-base.module';
import { ScoButtonModule } from '../sco-button/sco-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoNgModelBaseModule,
    ScoButtonModule,
    ScoJoinPipeModule,
  ],
  declarations: [
    ScoFileUploaderComponent,
  ],
  exports: [
    ScoFileUploaderComponent,
  ],
  providers: [
    ScoJoinPipe,
  ]
})
export class ScoFileUploaderModule { }
