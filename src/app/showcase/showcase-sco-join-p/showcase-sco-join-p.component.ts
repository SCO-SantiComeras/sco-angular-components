import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'showcase-sco-join-p',
  templateUrl: './showcase-sco-join-p.component.html',
  styleUrls: ['./showcase-sco-join-p.component.scss']
})

export class ShowcaseScoJoinPComponent {

  public valoresNulo = null;
  public valores: string[];

  constructor(private readonly cacheService: ScoCacheService) { 
    this.cacheService.setElement("title", "Join Pipe");
    this.valores = ["1", "2", "3", "4"];
  }
}