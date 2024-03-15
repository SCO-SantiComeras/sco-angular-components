import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoTabsComponent } from './sco-tabs/sco-tabs.component';
import { ScoTabItemComponent } from './sco-tab-item/sco-tab-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoTabsComponent,
    ScoTabItemComponent,
  ],
  exports: [
    ScoTabsComponent,
    ScoTabItemComponent,
  ]
})
export class ScoTabsModule { }
