import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-toast',
  templateUrl: './showcase-sco-toast.component.html',
  styleUrls: ['./showcase-sco-toast.component.scss']
})

export class ShowcaseScoToastComponent {

  constructor(
    private readonly toastService: ScoToastService,
    private readonly cacheService: ScoCacheService
  ) { 
    this.cacheService.setElement("title", "Toast");
  }

  addInfo() {
    this.toastService.addInfoMessage("Info", "Mensaje de info");
  }

  addError() {
    this.toastService.addErrorMessage("Error", "Mensaje de error");
  }

  addWarning() {
    this.toastService.addWarningMessage("Warning", "Mensaje de warning");
  }

  addSuccess() {
    this.toastService.addSuccessMessage("Success", "Mensaje de success");
  }
}
