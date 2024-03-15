import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-block-list-data-item',
  templateUrl: './sco-block-list-data-item.component.html',
  styleUrls: ['./sco-block-list-data-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoBlockListDataItemComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
