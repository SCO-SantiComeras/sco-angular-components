import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-detail',
  templateUrl: './showcase-sco-detail.component.html',
  styleUrls: ['./showcase-sco-detail.component.scss']
})

export class ShowcaseScoDetailComponent {

  public showDetail:boolean;

  public showTitle:boolean;
  public showOverlay:boolean;
  public enableClickOutside:boolean;

  constructor(
    private readonly cacheService: ScoCacheService
  ) { 
    this.cacheService.setElement("title", "Detail");
    this.showTitle = true;
    this.showOverlay = true;
    this.enableClickOutside = true;
  }
  
  openExample1() {
    this.showDetail = true;
    this.showTitle = true;
    this.showOverlay = true;
    this.enableClickOutside = true;
  }

  openExample2() {
    this.showDetail = true;
    this.showTitle = false;
    this.showOverlay = true;
    this.enableClickOutside = true;
  }

  openExample3() {
    this.showDetail = true;
    this.showTitle = true;
    this.showOverlay = false;
    this.enableClickOutside = true;
  }

  openExample4() {
    this.showDetail = true;
    this.showTitle = true;
    this.showOverlay = true;
    this.enableClickOutside = false;
  }

  closeDetail() {
    this.showDetail = false;
  }
}