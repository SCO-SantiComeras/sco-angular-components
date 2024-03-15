import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-card',
  templateUrl: './sco-card.component.html',
  styleUrls: ['./sco-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoCardComponent {

  @Input() showTitle: boolean = true;

  constructor() { }
}
