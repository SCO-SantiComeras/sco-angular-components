import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scoClickOutside]'
})

export class ScoClickOutsideDirective {

  @Input() clickOutsideEnabled: boolean = true;
  @Input() clickOutsideDelay: number;
  @Input() avoidFirstTime: boolean = true; 

  @Output() clickOutSide: EventEmitter<MouseEvent>;

  public firstTime: boolean;

  constructor(
    private elementRef: ElementRef
  ) { 
    this.clickOutSide = new EventEmitter<MouseEvent>();
    this.firstTime = true;
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {
    if (!this.clickOutsideEnabled)
      return;

    if (event)
      event.stopPropagation();

    const target = event.target as HTMLElement;
    if (target && !this.elementRef.nativeElement.contains(target)) {
      if (!this.avoidFirstTime || (this.avoidFirstTime && !this.firstTime)) {
        if (this.clickOutsideDelay) {
          setTimeout(() => {
            this.clickOutSide.emit(event);
          }, this.clickOutsideDelay);
        } else {
          this.clickOutSide.emit(event);
        }
      } else {
        this.firstTime = false;
      }
    }
  }
}
