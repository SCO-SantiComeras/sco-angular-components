import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Output, ViewEncapsulation, EventEmitter, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

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
export class ScoDetailComponent implements OnInit, OnChanges {

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
  public _border: string;
  public _borders: string[];

  constructor() { 
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
    this.clickOutSideFirstTime = true;
    this._border = undefined;
    this._borders = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      return;
    }

    if (changes["forceCloseNow"] && changes["forceCloseNow"].currentValue == true) {
      this.closeDetail(null);
    }

    if (changes['border'] && changes['border'].currentValue != undefined) {
      this._border = changes['border'].currentValue;
    }

    if (changes['borders'] && changes['borders'].currentValue != undefined && changes['borders'].currentValue.length > 0) {
      this._borders = changes['borders'].currentValue;
    }
  }

  ngOnInit(): void {
    if (this.border) {
      this._border = this.border;
    }

    if (this.borders && this.borders.length > 0) {
      this._borders = this.borders;
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
    const existBorder: string = this._borders.find(b => b == border);
    if (existBorder) {
      return true;
    }

    return false;
  }
}
