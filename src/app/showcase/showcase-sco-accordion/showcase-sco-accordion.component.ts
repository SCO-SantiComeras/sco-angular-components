import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-accordion',
  templateUrl: './showcase-sco-accordion.component.html',
  styleUrls: ['./showcase-sco-accordion.component.scss']
})

export class ShowcaseScoAccordionComponent {

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement("title", "Accordion");
  }

  openAaccordionEx1($event) {
    if($event) {
      this.toastService.addSuccessMessage("Éxito", "Abriendo el Accordion 1")
    } else {
      this.toastService.addSuccessMessage("Éxito", "Cerrando el Accordion 1")
    }
  }

  openAaccordionEx2($event) {
    if($event) {
      this.toastService.addSuccessMessage("Éxito", "Abriendo el Accordion 2")
    } else {
      this.toastService.addSuccessMessage("Éxito", "Cerrando el Accordion 2")
    }
  }
}