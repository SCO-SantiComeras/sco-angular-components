import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ScoConstantsService } from '../../services/sco-constants.service';

@Component({
  selector: 'sco-badge-pill',
  templateUrl: './sco-badge-pill.component.html',
  styleUrls: ['./sco-badge-pill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoBadgePillComponent {

  @Input() text: string = '';
  @Input() customClass: string = '';
  @Input() type: string;
  @Input() canClick: boolean = true;
  @Input() size: string = this.constantsService.ScoBadgeConstants.SIZE_MEDIUM;
  
  @Output() clickBadge: EventEmitter<MouseEvent>;

  constructor(public readonly constantsService: ScoConstantsService,) { 
    this.clickBadge = new EventEmitter<MouseEvent>();
  }

  onclickBadge($event){
    if (this.canClick) {
      this.clickBadge.emit($event); 
    }
  }
}
