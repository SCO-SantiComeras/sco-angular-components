import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { ScoAction } from '../../common/sco-action';

@Component({
  selector: 'sco-split-button',
  templateUrl: './sco-split-button.component.html',
  styleUrls: ['./sco-split-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ])
  ],
})
export class ScoSplitButtonComponent<T> {

  @Input() actions: ScoAction<T>[];
  @Input() showFirst: boolean = true;

  @Output() selectAction: EventEmitter<ScoAction<T>>;
  @Output() openCloseActions: EventEmitter<boolean>;

  public showOptions: boolean;
  public firstTime: boolean;

  constructor() { 
    this.showOptions = false;
    this.selectAction = new EventEmitter<ScoAction<T>>();
    this.openCloseActions = new EventEmitter<boolean>();
    this.firstTime = true;
  }

  openCloseOptions(){
    this.showOptions = !this.showOptions
    this.openCloseActions.emit(this.showOptions);
    this.firstTime = true; // reset clickoutside
  }

  sendAction($event: ScoAction<T>){
    this.selectAction.emit($event);
    this.showOptions = false;
  }

  hideOptions(){
    if(!this.firstTime){
      this.showOptions = false;
    }else{
      this.firstTime = false;
    }
  }
}
