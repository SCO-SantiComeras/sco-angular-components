import { Component } from '@angular/core';
import { ScoToastService } from 'projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-round-button',
  templateUrl: './showcase-sco-round-button.component.html',
  styleUrls: ['./showcase-sco-round-button.component.scss']
})
export class ShowcaseScoRoundButtonComponent {

  public valueEx1: boolean;
  public valueEx2: boolean;

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService  
  ) {
    this.cacheService.setElement('title', 'Round button')
  }

  clickEx1($event: boolean){
    if($event){
      this.toastService.addSuccessMessage('Éxito', 'Botón 1 activado');
    }else{
      this.toastService.addSuccessMessage('Éxito', 'Botón 1 desactivado');
    }
  }
  
  clickEx2($event: boolean){
    if($event){
      this.toastService.addSuccessMessage('Éxito', 'Botón 2 activado');
    }else{
      this.toastService.addSuccessMessage('Éxito', 'Botón 2 desactivado');
    }
  }
}
