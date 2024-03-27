import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoAppComponent } from './sco-app.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ScoAppComponent,
  ],
  exports: [
    ScoAppComponent,
  ],
})
export class ScoAppModule { }
