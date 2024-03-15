import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { ScoConstantsService } from '../../../../projects/sco-components-lib/src/services/sco-constants.service';
import { ScoResolutionService } from '../../../../projects/sco-components-lib/src/services/sco-resolution/sco-resolution.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-resolution',
  templateUrl: './showcase-sco-resolution.component.html',
  styleUrls: ['./showcase-sco-resolution.component.scss']
})

export class ShowcaseScoResolutionComponent {

  constructor(
    public resolutionService: ScoResolutionService,
    public constantsService: ScoConstantsService,
    private cacheService: ScoCacheService
  ) { 
    this.cacheService.setElement("title", "Resolution Service")
  }
}