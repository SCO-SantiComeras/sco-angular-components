import { cloneDeep } from 'lodash-es';
import { ScoAction } from '../../../common/sco-action';
import { ScoBlockItem } from '../model/sco-block-item';
import { Component, Input, OnInit, Output, EventEmitter, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-block-list-item',
  templateUrl: './sco-block-list-item.component.html',
  styleUrls: ['./sco-block-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoBlockListItemComponent<T> implements OnInit {

  @Input() blockItem: ScoBlockItem<T>;
  @Input() id: string;

  @Input() showHeader: boolean = true;
  @Input() showInfoAdditional: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showBorder: boolean = true;
  @Input() canSelectItems: boolean = true;

  @Input() templateHeader: TemplateRef<any>;
  @Input() templateInfoAdditional: TemplateRef<any>;
  @Input() templateData: TemplateRef<any>;

  @Output() actionSelected: EventEmitter<ScoAction<T>>;
  @Output() closeOptions: EventEmitter<string>;

  public showOptions: boolean;

  constructor() { 
    this.actionSelected = new EventEmitter<ScoAction<T>>();
    this.closeOptions = new EventEmitter<string>();

    this.showOptions = false;
  }

  ngOnInit() {
    this.showActions = this.showActions && this.blockItem.actions && this.blockItem.actions.length > 0;
  }

  openActions($event: MouseEvent) {
    $event.stopPropagation();
    this.showOptions = true;
    this.closeOptions.emit(this.id);
  }

  sendAction($event: MouseEvent, action: ScoAction<T>, index: number) {
    $event.stopPropagation();
    this.showOptions = false;

    let actionSended: ScoAction<T> = cloneDeep(action);
    actionSended.item = this.blockItem.item;

    this.actionSelected.emit(actionSended);
  }

  hideOptions($event: MouseEvent) {
    this.showOptions = false;
  }

}