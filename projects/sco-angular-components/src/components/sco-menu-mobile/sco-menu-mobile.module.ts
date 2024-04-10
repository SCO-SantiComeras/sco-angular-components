import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoMenuMobileComponent } from './sco-menu-mobile.component';
import { ScoButtonModule } from './../sco-button/sco-button.module';
import { ScoDetailModule } from './../sco-detail/sco-detail.module';
import { ScoTranslateModule } from './../../services/sco-translate/sco-translate.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ScoButtonModule,
    ScoDetailModule,
    ScoTranslateModule,
  ],
  declarations: [
    ScoMenuMobileComponent,
  ],
  exports: [
    ScoMenuMobileComponent,
  ]
})
export class ScoMenuMobileModule { }
