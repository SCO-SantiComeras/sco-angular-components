import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Output, ViewEncapsulation, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sco-detail',
  templateUrl: './sco-detail.component.html',
  styleUrls: ['./sco-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ScoDetailComponent implements OnChanges {

  @Input() showOverlay: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() clickOutsideEnabled: boolean = true;
  @Input() closeOnClick: boolean = false;
  @Input() forceCloseNow: boolean = false;
  
  @Output() close: EventEmitter<boolean>;

  public showDetail: boolean;

  private clickOutSideFirstTime: boolean;

  constructor() { 
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
    this.clickOutSideFirstTime = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["forceCloseNow"]) {
        if (changes["forceCloseNow"].currentValue == true) {
          this.closeDetail(null);
        }
      }
    }
  }

  closeDetail($event: Event) {
   if ($event)
    $event.stopPropagation();

    if (this.clickOutSideFirstTime == false) {
      this.showDetail = false;
      setTimeout(() => {
        this.close.emit(true);
      }, 600);
    } else {
      this.clickOutSideFirstTime = false;
    }
  }

}
