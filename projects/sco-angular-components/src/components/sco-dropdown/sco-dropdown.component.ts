import { trigger, style, state, transition, animate } from '@angular/animations';
import { ScoSelectItem } from '../../common/sco-select-item';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from 'lodash-es';

@Component({
  selector: 'sco-dropdown',
  templateUrl: './sco-dropdown.component.html',
  styleUrls: ['./sco-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('void => visible', animate('195ms ease-in')),
    ])
  ], 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoDropdownComponent),
      multi: true
    }
  ]
})

export class ScoDropdownComponent<T> extends ScoNgModelBase implements OnInit, OnChanges {

  @Input() options: ScoSelectItem<T>[] = [];
  @Input() labelNoResults: string = "No results";
  @Input() label: string = '';
  @Input() showLabel: boolean = false;
  @Input() required: boolean = false;
  @Input() showFilter: boolean = true;
  @Input() setSelectedItem: ScoSelectItem<T>;

  @Output() selectItem: EventEmitter<ScoSelectItem<T>>;
  @Output() unsetSelectedItem: EventEmitter<ScoSelectItem<T>>

  @ContentChild(TemplateRef, {static: false}) template: TemplateRef<any>;

  public showItems: boolean;
  public optionsShow: ScoSelectItem<T>[];
  public valueShow: string; 

  constructor() {
    super();
    this.showItems = false;
    this.selectItem = new EventEmitter<ScoSelectItem<T>>();
    this.unsetSelectedItem = new EventEmitter<ScoSelectItem<T>>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {

      if (changes['options']) {
        if (!this.options || (this.options && this.options.length == 0)) {
          this.optionsShow = [];
          this.valueShow = null;
          this.value = null;
        } else {
          this.optionsShow = this.options.slice(0);
          if (this.value) {
            this.preload(this.value); 
          }
        }
      }

      if (changes['setSelectedItem'] && changes['setSelectedItem'].currentValue) {
        const currentSelectedItem: ScoSelectItem<T> = changes['setSelectedItem'].currentValue;
        if (currentSelectedItem != null && currentSelectedItem != undefined) {
          this.onSelectItem(currentSelectedItem, true);
        }
      }
      
    }  
  }

  ngOnInit() {
    this.optionsShow = this.options.slice(0); // Copia el array, del 0 hacia delante (Todos)

    this.firstValue.subscribe( (v: any) => {
      this.preload(v);
    });

    this.changeValue.subscribe(v => {
      if(v == null || v == undefined){
        this.valueShow = null;
      }
    })
  }

  preload(v: any) {
    const optionFound = this.options.find(option => isEqual(option.value, v));
    if (optionFound) {
      this.valueShow = optionFound.label;
      this.onSelectItem(optionFound);
    }
  }

  showPanelOptions() {
    this.showItems = !this.showItems;
  }

  filter(searchValue: string) {
    this.optionsShow = this.options.filter(option => option.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

  onSelectItem(item: ScoSelectItem<T>, unsetSelectedItem: boolean = false) {
    if (item) {
      this.showItems = false;
      this.valueShow = item.label;
      this.value = item.value;
      this.selectItem.emit(item);

      if (unsetSelectedItem) {
        setTimeout(() => {
          this.unsetSelectedItem.emit(undefined);
        }, 100);
      }
    }
  }

  hidePanelItems() {
    this.showItems = false;
  }
}
