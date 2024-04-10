import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoAppComponent } from './sco-app.component';
import { ScoToastModule } from '../sco-toast/sco-toast.module';
import { ScoSpinnerModule } from '../sco-spinner/sco-spinner.module';
import { ScoMenuModule } from './../sco-menu/sco-menu.module';
import { ScoMenuMobileModule } from '../sco-menu-mobile/sco-menu-mobile.module';

@NgModule({
  imports: [
    CommonModule,
    ScoToastModule,
    ScoSpinnerModule,
    ScoMenuModule,
    ScoMenuMobileModule,
  ],
  declarations: [
    ScoAppComponent,
  ],
  exports: [
    ScoAppComponent,
  ],
})
export class ScoAppModule { }
