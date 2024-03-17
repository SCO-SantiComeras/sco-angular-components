import { Component } from '@angular/core';
import { ScoAction } from 'projects/sco-angular-components/src/common/sco-action';
import { ScoToastService } from 'projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-split-button',
  templateUrl: './showcase-sco-split-button.component.html',
  styleUrls: ['./showcase-sco-split-button.component.scss']
})
export class ShowcaseScoSplitButtonComponent {

  public actionsEx1: ScoAction<string>[] = [
    { label: 'Save', value: 'SAVE', item: 'save', icon: 'fa fa-floppy-o'},
    { label: 'Update', value: 'UPDATE', item: 'update', icon: 'fa fa-refresh'},
    { label: 'Delete', value: 'DELETE', item: 'delete', icon: 'fa fa-trash'},
  ];

  constructor(
    public readonly cacheService: ScoCacheService,
    public readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement('title', 'Split Button');
  }
  
  selectActionEx1($event){
    this.toastService.addSuccessMessage("Accion seleccionada ejemplo 1", JSON.stringify($event));
  }
}
