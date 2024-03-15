import { ScoToastService } from './../../../../projects/sco-components-lib/src/components/sco-toast/sco-toast.service';
import { ScoConstantsService } from '../../../../projects/sco-components-lib/src/services/sco-constants.service';
import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-input',
  templateUrl: './showcase-sco-input.component.html',
  styleUrls: ['./showcase-sco-input.component.scss']
})

export class ShowcaseScoInputComponent {

  public valueEx1: string;
  public valueEx2: string;
  public valueEx3: string;
  public valueEx4: string;
  public valueEx5: string;
  public valueEx6: string;
  public valueEx7: string;
  public valueEx8: string;
  public valueEx9: string;

  constructor(
    public readonly cacheService: ScoCacheService,
    public readonly toastService: ScoToastService,
    public readonly constantsService: ScoConstantsService
  ) { 
    this.cacheService.setElement("title", "Input");
  }
  
  onIconClick($event: boolean) {
    console.log($event);
    this.toastService.addSuccessMessage("Éito", "Pulsado el evento del icono: " + $event);
  }

  onInputChange($event) {
    console.log($event);
    if ($event == true) {
      this.toastService.addSuccessMessage("Éxito", "El valor ha cambiado");
    }
  }
} 