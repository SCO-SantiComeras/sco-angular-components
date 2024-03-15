import { Component } from '@angular/core';
import { ScoCacheService } from 'projects/sco-components-lib/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-indicator',
  templateUrl: './showcase-sco-indicator.component.html',
  styleUrls: ['./showcase-sco-indicator.component.scss']
})
export class ShowcaseScoIndicatorComponent {

  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;

  constructor(private readonly cacheService: ScoCacheService) {
    this.cacheService.setElement('title', 'Indicator')
    this.value1 = 25;
    this.value2 = 50;
    this.value3 = 75;
    this.value4 = 100;
    this.value5 = 100;
  }
}