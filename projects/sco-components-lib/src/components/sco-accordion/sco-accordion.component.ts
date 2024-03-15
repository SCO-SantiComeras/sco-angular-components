import { trigger, style, state, transition, animate, group } from '@angular/animations';
import { ScoConstantsService } from '../../services/sco-constants.service';
import { Component, Input, Output, ViewEncapsulation, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sco-accordion',
  templateUrl: './sco-accordion.component.html',
  styleUrls: ['./sco-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [ 
      state('open', style({height: '*'})),
      state('close', style({height: 0})),
      transition('open <=> close', group(
        [
          animate('400ms')
        ]
      ))
    ])
  ]
})

export class ScoAccordionComponent implements AfterViewInit {

  @Input() title: string;
  @Input() open: boolean = false;

  @Output() clickOpen: EventEmitter<boolean>;

  @ViewChild('contentAccordion') contentAccordion: ElementRef;

  public state: string;

  constructor(public readonly constantsService: ScoConstantsService) { 
    this.state = this.constantsService.ScoAccordionConstants.CLOSE;
    this.clickOpen = new EventEmitter<boolean>();
  }

  ngAfterViewInit(): void {
    this.state = this.open ? this.constantsService.ScoAccordionConstants.OPEN : this.constantsService.ScoAccordionConstants.CLOSE;
    if (this.open) {
      this.contentAccordion.nativeElement.style.overflow = 'hidden';
      setTimeout(() => {
        this.contentAccordion.nativeElement.style.overflow = 'inherit';
      }, 400);
    }
  }

  openClose() {
    if (this.state == this.constantsService.ScoAccordionConstants.OPEN) {
      this.state = this.constantsService.ScoAccordionConstants.CLOSE;
    } else {
      this.state = this.constantsService.ScoAccordionConstants.OPEN;
    }

    this.contentAccordion.nativeElement.style.overflow = 'hidden';
    if (this.state == this.constantsService.ScoAccordionConstants.CLOSE) {
      setTimeout(() => {
        this.open = !this.open;
        this.clickOpen.emit(this.open);
      }, 400);
    } else {
      this.open = !this.open;
      this.clickOpen.emit(this.open);
      setTimeout(() => {
        this.contentAccordion.nativeElement.style.overflow = 'inherit';
      }, 400);
    }
  }
}
