import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoAppComponent } from './sco-app.component';
import { ScoToastModule } from '../sco-toast/sco-toast.module';
import { ScoSpinnerModule } from '../sco-spinner/sco-spinner.module';
import { ScoMenuModule } from './../sco-menu/sco-menu.module';
import { ScoButtonModule } from './../sco-button/sco-button.module';

@NgModule({
  imports: [
    CommonModule,
    ScoToastModule,
    ScoSpinnerModule,
    ScoMenuModule,
    ScoButtonModule,
  ],
  declarations: [
    ScoAppComponent,
  ],
  exports: [
    ScoAppComponent,
  ],
})
export class ScoAppModule { }
