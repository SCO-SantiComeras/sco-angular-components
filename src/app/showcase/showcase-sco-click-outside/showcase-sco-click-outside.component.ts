import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-click-outside',
  templateUrl: './showcase-sco-click-outside.component.html',
  styleUrls: ['./showcase-sco-click-outside.component.scss']
})

export class ShowcaseScoClickOutsideComponent {

  public mode: string;

  constructor(
    private cacheService: ScoCacheService,
    private toastService: ScoToastService
  ) {
    this.cacheService.setElement("title", "Click Outside");
    this.mode = "estandar";
  }

  openEstandar() {
    this.mode = "estandar";
  }

  openDelay() {
    this.mode = "delay";
  }

  openDesactivated() {
    this.mode = "desactivated";
  }

  clickOutSide($event) {
    console.log("Event: " + $event)
    this.toastService.addSuccessMessage("Éxito", "Click Outside");
  }
}