import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoConfigService } from '../../../../projects/sco-angular-components/src/services/sco-config/sco-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-config',
  templateUrl: './showcase-sco-config.component.html',
  styleUrls: ['./showcase-sco-config.component.scss']
})

export class ShowcaseScoConfigComponent {

  constructor(
    private readonly configService: ScoConfigService,
    private readonly cacheService: ScoCacheService
  ) { 
    this.cacheService.setElement("title", "Config Service");
    console.log("All Data: " + this.configService.getAllData());
    console.log("Variable2: " + this.configService.getData('variable2'));
  }
}
