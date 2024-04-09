import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoMenuMobileComponent } from './sco-menu-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ScoMenuMobileComponent,
  ],
  exports: [
    ScoMenuMobileComponent,
  ]
})
export class ScoMenuMobileModule { }
