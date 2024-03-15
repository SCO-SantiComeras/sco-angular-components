import { Component } from '@angular/core';
import { ScoToastService } from 'projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';
import { ScoConstantsService } from 'projects/sco-angular-components/src/services/sco-constants.service';

@Component({
  selector: 'app-showcase-sco-badge-pill',
  templateUrl: './showcase-sco-badge-pill.component.html',
  styleUrls: ['./showcase-sco-badge-pill.component.scss']
})
export class ShowcaseScoBadgePillComponent {

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService,
    public readonly constantsService: ScoConstantsService
  ) { 
    this.cacheService.setElement('title', 'Badge');
  }

  clickBadge($event){
    this.toastService.addSuccessMessage("Exito", "Click en el badge");
    console.log($event);    
  }
}
