import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-showcase',
  templateUrl: './base-showcase.component.html',
  styleUrls: ['./base-showcase.component.scss']
})
export class BaseShowcaseComponent {

  @Input() title: string = undefined;
  @Input() showEamples: boolean = true;
  @Input() showCode: boolean = true;
  @Input() showInputs: boolean = true;
  @Input() showOutputs: boolean = true;

  constructor() { }
}
