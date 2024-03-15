import { Component } from '@angular/core';
import { ScoCacheService } from 'projects/sco-angular-components/src/public-api';

@Component({
  selector: 'app-showcase-sco-text-area',
  templateUrl: './showcase-sco-text-area.component.html',
  styleUrls: ['./showcase-sco-text-area.component.scss']
})
export class ShowcaseScoTextAreaComponent {

  value1: any;
  value2: any = "Valor inicial";
  value3: any;
  value4: any;

  constructor(    
    public readonly cacheService: ScoCacheService,
  ) {
    this.cacheService.setElement('title', 'Text Area');
  }
}
