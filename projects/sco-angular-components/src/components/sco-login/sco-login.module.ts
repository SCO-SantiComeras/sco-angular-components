import { ScoInputModule } from '../sco-input/sco-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoLoginComponent } from './sco-login.component';
import { FormsModule } from '@angular/forms';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoClickOutsideModule,
    ScoInputModule,
  ],
  declarations: [
    ScoLoginComponent,
  ],
  exports: [
    ScoLoginComponent,
  ]
})
export class ScoLoginModule { }
