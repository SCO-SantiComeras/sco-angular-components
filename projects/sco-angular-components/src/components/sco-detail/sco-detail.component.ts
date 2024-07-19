import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Output, ViewEncapsulation, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sco-detail',
  templateUrl: './sco-detail.component.html',
  styleUrls: ['./sco-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideRight', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
  ],
})
export class ScoDetailComponent implements OnChanges {

  @Input() showOverlay: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() clickOutsideEnabled: boolean = true;
  @Input() closeOnClick: boolean = false;
  @Input() forceCloseNow: boolean = false;
  @Input() rightPosition: boolean = true;
  @Input() showCloseButton: boolean = true;
  @Input() alwaysOpen: boolean = false;
  @Input() border: string = '1px solid';
  @Input() borders: string[] = ['left', 'top', 'bottom', 'right'];
  
  @Output() close: EventEmitter<boolean>;

  public showDetail: boolean;
  private clickOutSideFirstTime: boolean;

  constructor() { 
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
    this.clickOutSideFirstTime = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      return;
    }

    if (changes["forceCloseNow"]) {
      if (changes["forceCloseNow"].currentValue == true) {
        this.closeDetail(null);
      }
    }
  }

  closeDetail($event: Event) {
    if ($event) {
      $event.stopPropagation();
    }
    
    if (this.clickOutSideFirstTime) {
      this.clickOutSideFirstTime = false;
      return;
    }

    this.showDetail = false;
    setTimeout(() => {
      this.close.emit(true);
    }, 600);
  }

  setBorder(border: string): boolean {
    const existBorder: string = this.borders.find(b => b == border);
    if (existBorder) {
      return true;
    }

    return false;
  }
}
