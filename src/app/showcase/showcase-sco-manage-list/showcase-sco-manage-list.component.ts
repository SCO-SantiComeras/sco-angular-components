import { Component } from '@angular/core';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-manage-list',
  templateUrl: './showcase-sco-manage-list.component.html',
  styleUrls: ['./showcase-sco-manage-list.component.scss']
})
export class ShowcaseScoManageListComponent {

  public listEx2: string[];

  constructor(private readonly cacheService: ScoCacheService) {
    this.cacheService.setElement('title', 'Manage List');
    this.listEx2 = ['1', '2', '3', '4', '5'];
  }
}
