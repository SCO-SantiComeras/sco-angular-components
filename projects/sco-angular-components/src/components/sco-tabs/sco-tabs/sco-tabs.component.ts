import { ScoTabItemComponent } from '../sco-tab-item/sco-tab-item.component';
import { AfterViewInit, Component, ContentChildren, QueryList, ViewEncapsulation, TemplateRef } from '@angular/core';

@Component({
  selector: 'sco-tabs',
  templateUrl: './sco-tabs.component.html',
  styleUrls: ['./sco-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ScoTabsComponent implements AfterViewInit {

  @ContentChildren(ScoTabItemComponent) tabsItems: QueryList<ScoTabItemComponent>;
  public contentTemplate: TemplateRef<any>;

  constructor() { }

  async ngAfterViewInit(): Promise<void> {
    if (this.tabsItems.toArray().length > 0) {
      this.tabsItems.toArray()[0].selected = true;
      await this.open(this.tabsItems.toArray()[0]);
    }
  }

  async open(tab: ScoTabItemComponent) {
    this.tabsItems.forEach(t => {
      t.selected = false;
    });
    
    tab.selected = true;
    this.contentTemplate = tab.contentTemplate;
  }
}
