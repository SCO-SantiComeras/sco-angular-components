import { ScoSpinnerService } from '../sco-spinner.service';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-spinner',
  templateUrl: './sco-spinner.component.html',
  styleUrls: ['./sco-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ScoSpinnerComponent {

  @Input() embedded: boolean = false;
  @Input() pathImg: string = "resources/img/spinner.gif";

  constructor(public readonly spinnerService: ScoSpinnerService) { }
}
