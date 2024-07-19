import { ScoConstantsService } from './../../services/sco-constants.service';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ScoButton } from './bean/sco-button';

@Component({
  selector: 'sco-multiple-button',
  templateUrl: './sco-multiple-button.component.html',
  styleUrls: ['./sco-multiple-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoMultipleButtonComponent {
  @Input() buttons: ScoButton[] = [];
  @Input() modeButtonsSize: string = this.constantsService.ScoButtonConstants.SIZE_SMALL;

  @Output() action: EventEmitter<ScoButton>;

  constructor(private readonly constantsService: ScoConstantsService) {
    this.action = new EventEmitter<ScoButton>();
  }

  clickButton(button: ScoButton) {
    this.action.emit(button);
  }
}
