import { ScoInputModule } from '../sco-input/sco-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoLoginComponent } from './sco-login.component';
import { FormsModule } from '@angular/forms';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { ScoButtonModule } from '../sco-button/sco-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoClickOutsideModule,
    ScoButtonModule,
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
