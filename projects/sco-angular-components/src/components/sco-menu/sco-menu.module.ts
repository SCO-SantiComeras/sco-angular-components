import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoMenuComponent } from './sco-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScoMenuComponent],
  exports: [ScoMenuComponent],
})
export class ScoMenuModule { }
