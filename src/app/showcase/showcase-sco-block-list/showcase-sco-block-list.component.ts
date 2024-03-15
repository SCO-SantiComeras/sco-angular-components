import { ScoToastService } from './../../../../projects/sco-components-lib/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { ScoSelectedItem } from '../../../../projects/sco-components-lib/src/common/sco-selected-item';
import { ScoAction } from '../../../../projects/sco-components-lib/src/common/sco-action';
import { Appointment } from './model/Appointment';
import { ScoBlockItem } from './../../../../projects/sco-components-lib/src/components/sco-block-list/model/sco-block-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-block-list',
  templateUrl: './showcase-sco-block-list.component.html',
  styleUrls: ['./showcase-sco-block-list.component.scss']
})

export class ShowcaseScoBlockListComponent implements OnInit {

  public blockItems: ScoBlockItem<Appointment>[];
  public showHeader: boolean;
  public showInfoAdditional: boolean;
  public showActions: boolean;
  public showBorder: boolean;

  public CANCEL_APPOINTMENT: string  = 'CANCEL_APPOINTMENT';
  public BEFORE_APPOINTMENT: string  = 'BEFORE_APPOINTMENT';

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement("title", "Block List");
    this.blockItems = [];
    this.showHeader = true;
    this.showInfoAdditional = true;
    this.showActions = true;
    this.showBorder = true;
  }

  ngOnInit() {
    let appointments : Appointment[] = [
      {
        date: '2022-08-12',
        status: 'complete',
        client: 'Santi',
        age: 28
      },
      {
        date: '2022-08-12',
        status: 'canceled',
        client: 'Carol',
        age: 26
      },
      {
        date: '2022-08-12',
        status: 'in course',
        client: 'Mendoline',
        age: 20
      },
      {
        date: '2022-08-12',
        status: 'unknow',
        client: 'Prubleme',
        age: 21
      },
      {
        date: '2022-08-12',
        status: 'unknow',
        client: 'Client 1',
        age: 21
      },
      {
        date: '2022-08-12',
        status: 'unknow',
        client: 'Client 2',
        age: 21
      },
    ];
    this.createItems(appointments);
  }

  private createItems(appointments: Appointment[]) {
    let actions: ScoAction<Appointment>[] = [
      {
        label: 'Cancelar cita',
        value: this.CANCEL_APPOINTMENT,
        icon : ''
      },
      {
        label: 'Ver citas anteriores',
        value : this.BEFORE_APPOINTMENT,
        icon: 'fa fa-file'
      }
    ];

    appointments.forEach(ap =>  {
      let blockItem = new ScoBlockItem<Appointment>();
      blockItem.item = ap;

      switch (ap.status) {
        case 'complete':
          blockItem.borderColor = 'green';
          break;
        case 'canceled':
          blockItem.borderColor = 'red';
          break;
        case 'in course':
          blockItem.borderColor = 'blue';
          break;
        case 'unknow':
          blockItem.borderColor = 'grey';
          break;
      }

      if (blockItem.item.status !== 'in course') {
        blockItem.actions = actions.slice(1);
      } else {
        blockItem.actions = actions;
      }

      this.blockItems.push(blockItem);
    }); 
  }

  getAcation($event) {
    console.log($event);
    this.toastService.addInfoMessage("Accion seleccionada", JSON.stringify($event));
  }

  selectItem($event: ScoSelectedItem<Appointment>) {
    console.log($event);
    this.toastService.addInfoMessage("Item seleccionado", JSON.stringify($event));
  }

  addBlock() {
    let ap: Appointment[] = [
      {
        date: '2022-08-12',
        status: 'complete',
        client: 'AddBLock',
        age: 28
      },
    ];
    this.createItems(ap);
  }

  removeFirstBlock() {
    this.blockItems = this.blockItems.slice(1);
  }

  removeLastBlock() {
    this.blockItems = this.blockItems.slice(0, this.blockItems.length-1);
  }

  showHideHeader() {
    this.showHeader = !this.showHeader;
  }

  showHideInfoAdditional() {  
    this.showInfoAdditional = !this.showInfoAdditional;
  }

  showHideActions() {
    this.showActions = !this.showActions;
  }

  showHideBorder() {
    this.showBorder = !this.showBorder;
  }
}
