import { Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-tab-item',
  templateUrl: './sco-tab-item.component.html',
  styleUrls: ['./sco-tab-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ScoTabItemComponent {

  @Input() title: string;
  public selected: boolean;

  @ViewChild('contentTemplate', {static: false}) contentTemplate: TemplateRef<any>;

  constructor() { 
    this.selected = false;
  }
}
