import { Component } from '@angular/core';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-manage-list',
  templateUrl: './showcase-sco-manage-list.component.html',
  styleUrls: ['./showcase-sco-manage-list.component.scss']
})
export class ShowcaseScoManageListComponent {
  
  public label: string = 'Lista';
  public labelAddItem: string = 'Añadir elemento';
  public labelEmpty: string = 'Sin elementos';
  public list: string[];

  constructor(private readonly cacheService: ScoCacheService) {
    this.cacheService.setElement('title', 'Manage List');
  }

  onChangeList($event: any) {
    // TODO: Child Elements (Inputs) send untounched output event and it is captured here
    // This Fix Untounched output event captured. Refactor any type is needed
    // $event returns string[]
    if ($event && $event.bubbles) {
      return;
    }
  }
}
