import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-card',
  templateUrl: './showcase-sco-card.component.html',
  styleUrls: ['./showcase-sco-card.component.scss']
})

export class ShowcaseScoCardComponent {

  public showTitleEx1: boolean;
  public showTitleEx2: boolean;

  constructor(
    private readonly cacheService: ScoCacheService
  ) {
    this.cacheService.setElement("title", "Card");
    this.showTitleEx1 = true;
    this.showTitleEx2 = false;
  }
}