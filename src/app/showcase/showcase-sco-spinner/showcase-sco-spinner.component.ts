import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoSpinnerService } from './../../../../projects/sco-angular-components/src/components/sco-spinner/sco-spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-spinner',
  templateUrl: './showcase-sco-spinner.component.html',
  styleUrls: ['./showcase-sco-spinner.component.scss']
})

export class ShowcaseScoSpinnerComponent {

  public embedded: boolean;

  constructor(
    public readonly spinnerService: ScoSpinnerService,
    private readonly cacheService: ScoCacheService
  ) { 
    this.cacheService.setElement("title", "Spinner");
    this.embedded = false;
  }

  showSpinnerExample1() {
    this.embedded = false;
    this.spinnerService.showSpinner();
    setTimeout(() => {
      this.spinnerService.hideSpinner();
    }, 5000); // Espera 5 segundos  || 50000 == 50 segs ...
  }

  showSpinnerExample2() {
    this.embedded = true;
    this.spinnerService.showSpinner();
    setTimeout(() => {
      this.spinnerService.hideSpinner();
    }, 5000); // Espera 5 segundos  || 50000 == 50 segs ...
  }
}