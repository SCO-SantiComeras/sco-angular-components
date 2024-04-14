import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';
import { Component, Input, Output, ViewEncapsulation, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sco-toggle',
  templateUrl: './sco-toggle.component.html',
  styleUrls: ['./sco-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoToggleComponent),
      multi: true
    }
  ]
})

export class ScoToggleComponent extends ScoNgModelBase {

  @Input() label: string;
  @Input() required: boolean = false;
  @Input() inLine: boolean = false;

  @Output() toggled: EventEmitter<boolean>;

  constructor() { 
    super();
    this.toggled = new EventEmitter<boolean>();
  }

  onClick() {
    this.value = !this.value;
    this.toggled.emit(this.value);
  }

}
