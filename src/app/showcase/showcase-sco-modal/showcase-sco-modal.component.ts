
import { Component } from '@angular/core';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoModalService } from '../../../../projects/sco-angular-components/src/components/sco-modal/sco-modal.service';
import { ScoConstantsService } from '../../../../projects/sco-angular-components/src/services/sco-constants.service';
import { ScoSelectItem } from 'projects/sco-angular-components/src/common/sco-select-item';

@Component({
  selector: 'app-showcase-sco-modal',
  templateUrl: './showcase-sco-modal.component.html',
  styleUrls: ['./showcase-sco-modal.component.scss']
})

export class ShowcaseScoModalComponent {

  public sizeUnity: string;
  public height: string;
  public width: string;
  public sizeOptions: ScoSelectItem<string>[];

  constructor(
    public constantsService: ScoConstantsService,
    private cacheService: ScoCacheService,
    private toastService: ScoToastService,
    private modalService: ScoModalService,
  ) {
    this.cacheService.setElement("title", "Modal");

    this.sizeOptions = [
      new ScoSelectItem('Pixels', 'px', true),
      new ScoSelectItem('Percentage', 'percentage', false),
    ];

    this.width = '500';
    this.height = '400';

    this.sizeUnity = this.sizeOptions.find(o => o.value == 'px').value;
   }

  openConfirm() {
    this.modalService.open("confirm");
  }

  openInfo() {
    this.modalService.open("info");
  }

  openNoButtons() {
    this.modalService.open("no-buttons");
  }

  openForceClose() {
    this.modalService.open("force-close");
  }

  openBigModal() {
    this.modalService.open("big-modal");
  }

  openDinamicSize() {
    this.modalService.open("modal-dinamic-size");
  }

  closeModal($event) {
    this.toastService.addSuccessMessage("Éxito", "Se ha cerrado la ventana modal");
  }

  acceptModal($event) {
    this.toastService.addSuccessMessage("Éxito", "Se ha aceptado la ventana modal");
  }

  selectSizeUnity($event: ScoSelectItem<string>) {
    console.log($event);
  }
}