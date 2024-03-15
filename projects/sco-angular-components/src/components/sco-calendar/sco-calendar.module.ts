import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoCalendarComponent } from './sco-calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    CalendarModule,
  ],
  declarations: [
    ScoCalendarComponent,
  ],
  exports: [
    ScoCalendarComponent,
  ],
  providers:[
    PrimeNGConfig,
  ]
})
export class ScoCalendarModule { }
