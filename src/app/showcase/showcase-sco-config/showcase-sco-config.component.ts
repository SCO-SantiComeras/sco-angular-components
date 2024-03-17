import { ScoToastService } from '../../../../projects/sco-angular-components/src/public-api';
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
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService,
  ) { 
    this.cacheService.setElement("title", "Config Service");
    this.toastService.addInfoMessage('All Data', JSON.stringify(this.configService.getAllData()));
    this.toastService.addInfoMessage('Variable2', this.configService.getData('variable2'));
  }

}
