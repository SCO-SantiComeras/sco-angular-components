import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-tabs',
  templateUrl: './showcase-sco-tabs.component.html',
  styleUrls: ['./showcase-sco-tabs.component.scss']
})

export class ShowcaseScoTabsComponent {

  constructor(
    private readonly cacheService: ScoCacheService
  ) { 
    this.cacheService.setElement("title", "Tabs");
  }
}