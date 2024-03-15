import { ScoCacheService } from '../../../projects/sco-components-lib/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sco-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {

  constructor(private readonly cacheService: ScoCacheService) { 
    this.cacheService.setElement("title", "SCO Angular components library")
  }
}
