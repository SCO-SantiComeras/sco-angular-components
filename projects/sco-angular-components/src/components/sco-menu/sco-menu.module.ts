
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoMenuComponent } from './sco-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoTranslateModule } from './../../services/sco-translate/sco-translate.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ScoTranslateModule,
  ],
  declarations: [
    ScoMenuComponent,
  ],
  exports: [
    ScoMenuComponent,
  ],
})
export class ScoMenuModule { }
