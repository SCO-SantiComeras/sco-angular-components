import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoSpinnerService } from './../../../../projects/sco-angular-components/src/components/sco-spinner/sco-spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'showcase-sco-load-iframe',
  templateUrl: './showcase-sco-load-iframe.component.html',
  styleUrls: ['./showcase-sco-load-iframe.component.scss']
})

export class ShowcaseScoLoadIframeComponent {

  constructor(
    private readonly spinnerService: ScoSpinnerService,
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService
  ) {
    this.cacheService.setElement("title", "Load Iframe");
    this.spinnerService.showSpinner();
  }

  load() {
    console.log("Iframe cargado!");
    this.toastService.addSuccessMessage("Éxito", "Iframe cargado!");
    this.spinnerService.hideSpinner();
  }
}