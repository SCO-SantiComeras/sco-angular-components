import { ScoConstantsService } from './../../services/sco-constants.service';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from "lodash-es";
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';
import { ScoSelectItem } from '../../common/sco-select-item';

@Component({
  selector: 'sco-checkbox',
  templateUrl: './sco-checkbox.component.html',
  styleUrls: ['./sco-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoCheckboxComponent),
      multi: true,
    },
  ],
})
export class ScoCheckboxComponent<T> extends ScoNgModelBase implements OnInit {

  @Input() options: ScoSelectItem<T>[] = [];
  @Input() binary: boolean = false;
  @Input() labelBinary: string;
  @Input() viewMode: string = this.constantsService.ScoResolutionConstants.WEB;
  @Input() addOneItem: boolean = false;
  
  @Output() clickCheck: EventEmitter<ScoSelectItem<T>[]>;
  @Output() clickCheckBinary: EventEmitter<boolean>;

  constructor(public readonly constantsService: ScoConstantsService) {
    super();
    this.clickCheck = new EventEmitter<ScoSelectItem<T>[]>();
    this.clickCheckBinary = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.firstValue.subscribe((value: T[] | boolean) => {
      if(value instanceof Boolean){
        this.value = value;
        this.clickCheckBinary.emit(this.value);
      }else if(value instanceof Array){
        const options = this.options.filter(s => (<T[]>value).find(v => isEqual(v, s.value)));
        options.forEach(op => op.selected = true);
        this.value = value;
        this.clickCheck.emit(this.value);
      }
    })
  }

  onclickCheck($event?: ScoSelectItem<T>){
    if(this.binary){
      this.value = !this.value;
      this.clickCheckBinary.emit(this.value);
    }else{
      $event.selected = !$event.selected;
      this.value = this.options.filter(s => s.selected).map(s => s.value);
      this.clickCheck.emit(this.value);
    }
  }

}
