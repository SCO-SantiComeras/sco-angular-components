import { ScoInputModule } from '../sco-input/sco-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoLoginComponent } from './sco-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoClickOutsideModule } from '../../directives/sco-click-outside/sco-click-outside.module';
import { ScoButtonModule } from '../sco-button/sco-button.module';
import { ScoFormErrorsModule } from '../../services/sco-form-errors/sco-form-errors.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScoClickOutsideModule,
    ScoButtonModule,
    ScoInputModule,
    ScoFormErrorsModule,
  ],
  declarations: [
    ScoLoginComponent,
  ],
  exports: [
    ScoLoginComponent,
  ]
})
export class ScoLoginModule { }
