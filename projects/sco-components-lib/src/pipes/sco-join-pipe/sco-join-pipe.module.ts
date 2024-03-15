import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoJoinPipe } from './sco-join.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [	
    ScoJoinPipe,
   ],
   exports: [
    ScoJoinPipe,
   ]
})

export class ScoJoinPipeModule { }
