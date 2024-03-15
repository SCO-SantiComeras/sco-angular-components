import { NgModule } from '@angular/core';
import { ScoConfigPipe } from './sco-config.pipe';
import { ScoConfigService } from './sco-config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [	
    ScoConfigPipe,
   ],
  exports: [
    ScoConfigPipe,
  ],
  providers: [
    ScoConfigService,
  ]
})
export class ScoConfigModule { }
