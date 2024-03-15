import { ScoToastService } from './../../../../projects/sco-components-lib/src/components/sco-toast/sco-toast.service';
import { ScoSelectedItem } from '../../../../projects/sco-components-lib/src/common/sco-selected-item';
import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { ScoTableCol } from './../../../../projects/sco-components-lib/src/components/sco-table/model/sco-table-cols';
import { ScoAction } from '../../../../projects/sco-components-lib/src/common/sco-action';
import { ScoTableItem } from './../../../../projects/sco-components-lib/src/components/sco-table/model/sco-table.item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-table',
  templateUrl: './showcase-sco-table.component.html',
  styleUrls: ['./showcase-sco-table.component.scss']
})
export class ShowcaseScoTableComponent<T> implements OnInit {

  public cols: ScoTableCol[];
  public tableItems: ScoTableItem<T>[];

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement("title", "Table");
    this.cols = [];
    this.tableItems = [];
  }

  ngOnInit() {
    this.cols = [
      {label: "Fecha", property: "date"},
      {label: "Estado", property: "status"},
      {label: "Nombre", property: "name"},
      {label: "Edad", property: "age"},
      {label: "Mascota", property: "name"}
    ]

    let appointments : any[] = [
      {
        date: '2022-08-12',
        status: 'complete',
        name: 'Santi',
        age: 28,
        pet: {
          name: 'Mascota 1'
        }
      },
      {
        date: '2022-08-12',
        status: 'canceled',
        name: 'Carol',
        age: 26,
        pet: {
          name: 'Mascota 2'
        }
      },
      {
        date: '2022-08-12',
        status: 'in course',
        name: 'Mendoline',
        age: 20,
        pet: {
          name: 'Mascota 3'
        }
      },
      {
        date: '2022-08-12',
        status: 'unknow',
        name: 'Prubleme',
        age: 21,
        pet: {
          name: 'Mascota 4'
        }
      },
      {
        date: '2022-08-12',
        status: 'unknow',
        name: 'Client 1',
        age: 21,
        pet: {
          name: 'Mascota 6'
        }
      },
      {
        date: '2022-08-12',
        status: 'unknow',
        name: 'Client 2',
        age: 21,
        pet: {
          name: 'Mascota 6'
        }
      },
    ];
    this.createItems(appointments);
  }

  private createItems(appointments: any[]) {
    let actions: ScoAction<any>[] = [
      {
        label: 'Editar',
        value: 'edit',
        icon : 'fa fa-edit'
      },
      {
        label: 'Eliminar',
        value : 'delete',
        icon: 'fa fa-file'
      }
    ];
    
    let cont: number = 0;

    appointments.forEach(ap =>  {
      let tableItem = new ScoTableItem<any>();
      tableItem.item = ap;
      tableItem.actions = actions;
      tableItem.index = cont;

      cont++;

      this.tableItems.push(tableItem);
    }); 
  }

  onItemSelected($event: ScoSelectedItem<any>) {
    console.log("Item seleccionado: " + JSON.stringify($event));
    this.toastService.addSuccessMessage("Éxito", "Item seleccionado: " + JSON.stringify($event));
  }

  onActionSelected($event: ScoAction<any>) {
    console.log("Accion seleccionada: " + JSON.stringify($event));
    this.toastService.addSuccessMessage("Éxito", "Accion seleccionada:" + JSON.stringify($event));
  }

  onCloseOptions($event: Event) {
    $event.stopPropagation();
    console.log("Opciones Cerradas ww: " + JSON.stringify($event));
    this.toastService.addSuccessMessage("Éxito", "Opciones Cerradas: " + JSON.stringify($event));
  }
}
