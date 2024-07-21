import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoSidebarContentComponent } from './sco-sidebar-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoSidebarContentComponent,
  ],
  exports: [
    ScoSidebarContentComponent,
  ],
})
export class ScoSidebarContentModule { }
