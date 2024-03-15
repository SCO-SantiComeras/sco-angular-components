import { Component, OnInit } from '@angular/core';
import { ScoCacheService, ScoConstantsService, ScoToastService } from 'projects/sco-angular-components/src/public-api';

@Component({
  selector: 'app-showcase-sco-button',
  templateUrl: './showcase-sco-button.component.html',
  styleUrls: ['./showcase-sco-button.component.scss']
})
export class ShowcaseScoButtonComponent implements OnInit {

  constructor(
    public readonly constantsService: ScoConstantsService,
    public readonly cacheService: ScoCacheService,
    public readonly toastService: ScoToastService,
  ) {
    this.cacheService.setElement('title', 'Button');
  }

  ngOnInit() {}

  click($event) {
    this.toastService.addSuccessMessage('Exito', 'click en el boton');
  }

  submitForm() {
    this.toastService.addSuccessMessage('Exito', 'accion submit en el form');
  }
}
