import { ScoToastService } from './../../../../projects/sco-components-lib/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-toggle',
  templateUrl: './showcase-sco-toggle.component.html',
  styleUrls: ['./showcase-sco-toggle.component.scss']
})

export class ShowcaseScoToggleComponent {

  public valueExample3: boolean;
  public valueExample4: boolean;

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement("title", "Toggle");
    this.valueExample3 = false;
    this.valueExample4 = false;
  }

  changeToggle($event) {
    if ($event) {
      this.toastService.addSuccessMessage("Éxito", "El toggle se ha activado");
    } else {
      this.toastService.addSuccessMessage("Éxito", "El toggle se ha desactivado");
    }
  }
}