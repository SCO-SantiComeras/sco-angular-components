import { ScoResolutionService } from './sco-resolution.service';
import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[scoResolution]'
})

export class ScoResolutionDirective implements OnInit {

  constructor(private resolutionService: ScoResolutionService) {}

  ngOnInit(): void {
    this.sendSize(window.innerWidth)
  }

  private sendSize(widht: number) {
    this.resolutionService.setSize(widht);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sendSize(event.currentTarget.innerWidth);
  }
}
