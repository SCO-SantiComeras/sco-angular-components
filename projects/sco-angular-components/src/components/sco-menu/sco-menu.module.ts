import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoMenuComponent } from './sco-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ScoMenuComponent,
  ],
  exports: [
    ScoMenuComponent,
  ],
})
export class ScoMenuModule { }
