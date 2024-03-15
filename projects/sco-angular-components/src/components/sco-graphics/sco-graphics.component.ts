import { ScoConstantsService } from './../../services/sco-constants.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sco-graphics',
  templateUrl: './sco-graphics.component.html',
  styleUrls: ['./sco-graphics.component.scss']
})
export class ScoGraphicsComponent {

  @Input() type: string = this.contantsService.ScoGraphicsConstants.TYPE_LINE;
  @Input() data: any;
  @Input() options: any = {};
  @Input() height: string;
  
  @Output() selectData: EventEmitter<any>;

  constructor(private readonly contantsService: ScoConstantsService) { 
    this.selectData = new EventEmitter<any>();
  }

  onSelectData($event){
    this.selectData.emit($event);
  }
}
