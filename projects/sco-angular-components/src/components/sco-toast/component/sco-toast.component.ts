import { ScoConstantsService } from './../../../services/sco-constants.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ScoToastService } from '../sco-toast.service';
import { ScoToast } from '../model/sco-toast';

@Component({
  selector: 'sco-toast',
  templateUrl: './sco-toast.component.html',
  styleUrls: ['./sco-toast.component.scss'],
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
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class ScoToastComponent implements OnInit {

  @Input() timeout: number;
  @Input() orientation: string = this.constantsService.ScoToastConstants.ORIENTATION_TOP_RIGHT;
  @Input() block: boolean = false;

  constructor(
    public readonly toastService: ScoToastService,
    public readonly constantsService: ScoConstantsService,
  ) { }

  ngOnInit() {
    if (this.timeout) {
      this.toastService.timeout = this.timeout;
    }
  }

  closeToast(toast: ScoToast) {
    this.toastService.closeToast(toast);
  }

}
