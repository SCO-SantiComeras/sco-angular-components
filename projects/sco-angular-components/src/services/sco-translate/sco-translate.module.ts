import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoTranslatePipe } from './sco-translate.pipe';
import { ScoTranslateService } from './sco-translate.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [	
    ScoTranslatePipe,
   ],
  exports: [
    ScoTranslatePipe,
  ],
  providers: [
    ScoTranslateService,
  ]
})

export class ScoTranslateModule { }
