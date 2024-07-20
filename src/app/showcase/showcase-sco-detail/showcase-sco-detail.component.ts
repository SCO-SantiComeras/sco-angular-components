import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-detail',
  templateUrl: './showcase-sco-detail.component.html',
  styleUrls: ['./showcase-sco-detail.component.scss']
})

export class ShowcaseScoDetailComponent {

  /* Detail Show Flag */
  public showDetail: boolean;

  /* Detail Input Params */
  public showOverlay: boolean = true;
  public showTitle: boolean = true;
  public clickOutsideEnabled: boolean = true;
  public closeOnClick: boolean = false;
  public forceCloseNow: boolean = false;
  public rightPosition: boolean = true;
  public showCloseButton: boolean = true;
  public alwaysOpen: boolean = false;
  public border: string = '1px solid';
  public borders: string[] = ['left', 'top', 'bottom', 'right'];

  constructor(private readonly cacheService: ScoCacheService) { 
    this.cacheService.setElement("title", "Detail");
  }
  
  openDetail() {
    this.showDetail = true;
  }

  closeDetail($event: boolean): void {
    if ($event) {
      this.showDetail = false;
    }
  }
}