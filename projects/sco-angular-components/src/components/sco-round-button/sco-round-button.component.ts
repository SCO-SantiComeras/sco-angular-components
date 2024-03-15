import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';

@Component({
  selector: 'sco-round-button',
  templateUrl: './sco-round-button.component.html',
  styleUrls: ['./sco-round-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoRoundButtonComponent),
      multi: true,
    },
  ],
})
export class ScoRoundButtonComponent extends ScoNgModelBase {

  @Input() width: number = 100;
  @Input() height: number = 100;
  @Input() disabled: boolean = false;
  
  @Output() action: EventEmitter<boolean>;

  constructor() { 
    super();
    this.action = new EventEmitter();
  }

  onclickCheck(){
    if(!this.disabled){ 
      this.value = !this.value;
      this.action.emit(this.value); 
    }
  }
}
