import { ScoCallback } from './../../../../projects/sco-angular-components/src/common/sco-callback';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import { ScoAction } from './../../../../projects/sco-angular-components/src/common/sco-action';
import { ScoSelectedItem } from './../../../../projects/sco-angular-components/src/common/sco-selected-item';
import { ScoResolutionService } from './../../../../projects/sco-angular-components/src/services/sco-resolution/sco-resolution.service';
import { ScoConstantsService } from './../../../../projects/sco-angular-components/src/public-api';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoFormErrorsService } from './../../../../projects/sco-angular-components/src/services/sco-form-errors/sco-form-errors.service';
import { ScoFormError } from './../../../../projects/sco-angular-components/src/services/sco-form-errors/sco-form-error.model';
import { ScoTableCol } from './../../../../projects/sco-angular-components/src/components/sco-table/model/sco-table-cols';
import { ScoBlockItem } from './../../../../projects/sco-angular-components/src/components/sco-block-list/model/sco-block-item';
import { ScoTableItem } from './../../../../projects/sco-angular-components/src/components/sco-table/model/sco-table.item';

export class FormCrudExample {
  id: number; 
  name: string;
  secondName: string;
  age: number;
}

export class FormCrudExampleFilter {
  id?: number;
  name?: string;
  secondName?: string;
  age?: number;
}

const EXAMPLE_TABLE_ITEMS = [
  {
    "item": {
      "id": 1,
      "name": "Santi",
      "secondName": "Comeras",
      "age": 30
    },
    "actions": [
      {
        "label": "Editar",
        "value": "update",
        "icon": "fa fa-edit"
      },
      {
        "label": "Eliminar",
        "value": "delete",
        "icon": "fa fa-trash"
      }
    ],
    "index": 0
  },
  {
    "item": {
      "id": 2,
      "name": "Santi",
      "secondName": "Oteo",
      "age": 35
    },
    "actions": [
      {
        "label": "Editar",
        "value": "update",
        "icon": "fa fa-edit"
      },
      {
        "label": "Eliminar",
        "value": "delete",
        "icon": "fa fa-trash"
      }
    ],
    "index": 1
  },
  {
    "item": {
      "id": 3,
      "name": "Carol",
      "secondName": "Comeras",
      "age": 25
    },
    "actions": [
      {
        "label": "Editar",
        "value": "update",
        "icon": "fa fa-edit"
      },
      {
        "label": "Eliminar",
        "value": "delete",
        "icon": "fa fa-trash"
      }
    ],
    "index": 2
  },
  {
    "item": {
      "id": 4,
      "name": "Carol",
      "secondName": "Serrano",
      "age": 25
    },
    "actions": [
      {
        "label": "Editar",
        "value": "update",
        "icon": "fa fa-edit"
      },
      {
        "label": "Eliminar",
        "value": "delete",
        "icon": "fa fa-trash"
      }
    ],
    "index": 3
  }
];

@Component({
  selector: 'app-showcase-sco-form-crud',
  templateUrl: './showcase-sco-form-crud.component.html',
  styleUrls: ['./showcase-sco-form-crud.component.scss']
})
export class ShowcaseScoFormCrudComponent implements OnInit {

  public filterForm: FormGroup;

  public crudErrors: ScoFormError[];
  

  private _tableItems: ScoTableItem<FormCrudExample>[];
  private _blockItems: ScoBlockItem<FormCrudExample>[];
  private _selectedItem: FormCrudExample;
  private _nextId: number;
  private _mode: string;

  public cols: ScoTableCol[];
  public currentTableItems: ScoTableItem<FormCrudExample>[];
  public currentBlocklistItems: ScoBlockItem<FormCrudExample>[];

  constructor(
    public readonly formErrorsService: ScoFormErrorsService,
    public readonly toastService: ScoToastService,
    public readonly constantsService: ScoConstantsService,
    public readonly resolutionService: ScoResolutionService,
  ) { 
    this._tableItems = [];
    this._blockItems = [];
    this._selectedItem = undefined;
    this._nextId = 5;

    this.cols = [];
    this.currentTableItems = [];
    this.currentBlocklistItems = [];
  }

  ngOnInit() {
    this.filterForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      secondName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
    });

    this.crudErrors = [];

    this.cols = [
      { label: 'Id', property: 'id' },
      { label: 'Nombre', property: 'name' },
      { label: 'Apellidos', property: 'secondName' },
      { label: 'Edad', property: 'age' },
    ];

    this._selectedItem = undefined;

    this._tableItems = cloneDeep(EXAMPLE_TABLE_ITEMS);
    this.currentTableItems = cloneDeep(this._tableItems);

    this._blockItems = cloneDeep(EXAMPLE_TABLE_ITEMS);
    this.currentBlocklistItems = cloneDeep(this._blockItems);
  }

  search() {
    this.currentTableItems = [];
    this.currentBlocklistItems = [];

    const formCrudExampleFilter: FormCrudExampleFilter = this.filterForm.value;
    const keys: string[] = Object.keys(formCrudExampleFilter);

    const filteredItems: ScoTableItem<FormCrudExample>[] = [];
    for (const item of this._tableItems) {
      let pusheableItem: boolean = true;

      for (const key of keys) {
        if (formCrudExampleFilter[key]) {
          if (formCrudExampleFilter[key] != item.item[key]) {
            pusheableItem = false;
          }
        }
      }

      if (pusheableItem) {
        filteredItems.push(item);
      }
    }

    if (filteredItems && filteredItems.length > 0) {
      this.currentTableItems = cloneDeep(filteredItems);
      this.currentBlocklistItems = cloneDeep(filteredItems);
    }
  }

  clearFilter() {
    this.filterForm = this.formErrorsService.cleanErrors(this.filterForm);
    this.currentTableItems = this._tableItems;
    this.currentBlocklistItems = this._blockItems;
  }

  onDownloadExcel($event: boolean) {
    if (!$event) return;

    this.toastService.addSuccessMessage('Excel', 'Botón descargar fichero excel pulsado');
  }

  onItemSelected($event: ScoSelectedItem<FormCrudExample>) {
    if (!$event) return;

    this.toastService.addSuccessMessage('Item selected', `Elemento seleccionado: ${JSON.stringify($event.item)}`);
  }

  onActionSelected($event: ScoAction<FormCrudExample>) {
    this.toastService.addSuccessMessage($event.value, `Elemento seleccionado: ${JSON.stringify($event.item)}`);
    this._selectedItem = $event.item;

    if ($event.value == this.constantsService.ScoFormCrudConstants.UPDATE_ACTION) {
      this._mode = this.constantsService.ScoFormCrudConstants.MODE_UPDATE;
    }
  }

  onChangePage($event: number) {
    this.toastService.addSuccessMessage(`Change page`, `La página cambió: ${$event}`);
  }

  onCloseOptions($event: MouseEvent) {
    //this.toastService.addSuccessMessage(`Options panel`, `Se cerró el panel de opciones: ${$event}`);
  }

  onGoToCreate($event: FormCrudExample) {
    this.toastService.addSuccessMessage(`Se abrió el formulario`, `Nuevo elemento: ${JSON.stringify($event)}`);
    this._mode = this.constantsService.ScoFormCrudConstants.MODE_NEW;
  }
  
  onFormCancel($event: FormCrudExample) {
    this.crudErrors = [];
    this.toastService.addSuccessMessage(`Formulario`, `Se canceló el formulario: ${JSON.stringify($event)}`);
  }

  onFormConfirm($event: ScoCallback<FormCrudExample>) {
    this.crudErrors = [];

    if (!$event.item.name) {
      this.crudErrors.push({ 
        formControlName: 'name', 
        error: `Nombre no informado`,
      });
    }

    if (!$event.item.secondName) {
      this.crudErrors.push({ 
        formControlName: 'secondName', 
        error: `Apellidos no informados`,
      });
    }

    if ($event.item.age == undefined) {
      this.crudErrors.push({
        formControlName: 'age', 
        error: `Edad no informada`,
      });
    }

    if (this.crudErrors && this.crudErrors.length > 0) {
      return this.toastService.addErrorMessage(`Formulario`, `El formulario contiene errores: ${JSON.stringify($event.item)}`);
    }

    this.toastService.addSuccessMessage(`Formulario`, `Se confirmó el formulario: ${JSON.stringify($event.item)}`);


    if (this._mode != this.constantsService.ScoFormCrudConstants.MODE_UPDATE) {
      $event.item.id = this._nextId;
      this._nextId++;

      const newTableItem: ScoTableItem<FormCrudExample> =  {
        "item": $event.item,
        "actions": [
          {
            "label": "Editar",
            "value": "update",
            "icon": "fa fa-edit"
          },
          {
            "label": "Eliminar",
            "value": "delete",
            "icon": "fa fa-trash"
          }
        ],
        "index": this._tableItems.length
      };

      const newBlockItem: ScoBlockItem<FormCrudExample> =  {
        "item": $event.item,
        "actions": [
          {
            "label": "Editar",
            "value": "update",
            "icon": "fa fa-edit"
          },
          {
            "label": "Eliminar",
            "value": "delete",
            "icon": "fa fa-trash"
          }
        ],
      };

      this._tableItems.push(newTableItem);
      this._blockItems.push(newBlockItem);
    } else {
      const existItem: ScoTableItem<FormCrudExample> = this._tableItems.find(i => i.item.id == this._selectedItem.id);
      if (existItem) {
        const index: number = this._tableItems.indexOf(existItem);
        if (index != -1) {
          this._tableItems[index].item = cloneDeep($event.item);
          this._blockItems[index].item = cloneDeep($event.item);
        }
      }
    }

    this.currentTableItems = cloneDeep(this._tableItems);
    this.currentBlocklistItems = cloneDeep(this._blockItems);
    $event.callBack();
  }

  onFormClose($event: FormCrudExample) {
    this.crudErrors = [];
    this.toastService.addSuccessMessage(`Formulario`, `Se cerró el formulario: ${JSON.stringify($event)}`);
  }

  onConfirmDeleteModal($event: boolean) {
    this.toastService.addSuccessMessage(`Eliminar`, `Se confirmó la ventana modal: ${$event}`);

    if ($event) {
      const existItem = this._tableItems.find(i => i.item.id == this._selectedItem.id);
      if (existItem) {
        const index: number = this._tableItems.indexOf(existItem);
        if (index != -1) {
          this._tableItems.splice(index, 1);
          this._blockItems.splice(index, 1);

          this.currentTableItems = cloneDeep(this._tableItems);
          this.currentBlocklistItems = cloneDeep(this._blockItems);
        }
      }
    }

    this._selectedItem = undefined;
  }

  onCloseDeleteModal($event: boolean) {
    this.toastService.addSuccessMessage(`Eliminar`, `Se cerró la ventana modal: ${$event}`);
    this._selectedItem = undefined;
  }
}
