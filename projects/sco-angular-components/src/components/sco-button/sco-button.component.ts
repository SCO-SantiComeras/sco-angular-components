import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScoConstantsService } from '../../services/sco-constants.service';

@Component({
  selector: 'sco-button',
  templateUrl: './sco-button.component.html',
  styleUrls: ['./sco-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoButtonComponent implements OnInit {

  /* Inputs */
  @Input() icon: string;
  @Input() text: string;
  @Input() block: boolean;
  @Input() disabled: boolean = false;
  @Input() showText: boolean = true;
  @Input() type: string = this.constantsService.ScoButtonConstants.TYPE_BUTTON;
  @Input() mode: string = this.constantsService.ScoButtonConstants.MODE_DEFAULT;
  @Input() size: string = this.constantsService.ScoButtonConstants.SIZE_SMALL;
  @Input() position: string = this.constantsService.ScoButtonConstants.FLOAT_POSITION_RIGHT_BOTTOM;
  @Input() border: boolean = true;
  @Input() floatButton: boolean = false;

  /* Outputs */
  @Output() action: EventEmitter<MouseEvent>;

  constructor(public constantsService: ScoConstantsService) {
    this.action = new EventEmitter<MouseEvent>();
  }

  ngOnInit() {
    if (this.floatButton && !this.position) {
      this.position = this.constantsService.ScoButtonConstants.FLOAT_POSITION_RIGHT_BOTTOM;
    }
  }

  clickButton($event) {
    if (!this.disabled) {
      this.action.emit($event);
    }
  }
}
