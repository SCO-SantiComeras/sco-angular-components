import { ScoButtonModule } from './../sco-button/sco-button.module';
import { ScoSpinnerModule } from './../sco-spinner/sco-spinner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoPdfViewerComponent } from './sco-pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScoSpinnerModule,
    PdfViewerModule,
    ScoButtonModule,
  ],
  declarations: [
    ScoPdfViewerComponent,
  ],
  exports: [
    ScoPdfViewerComponent,
  ],
  providers: [
    
  ]
})
export class ScoPdfViewerModule { }
