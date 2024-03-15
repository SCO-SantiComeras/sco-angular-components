import { Component, Input, ViewEncapsulation } from '@angular/core';

/* wip */
@Component({
  selector: 'sco-signature',
  templateUrl: './sco-signature.component.html',
  styleUrls: ['./sco-signature.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoSignatureComponent {
  @Input() logo: string;
  @Input() signature: string;

  constructor() {}
}
