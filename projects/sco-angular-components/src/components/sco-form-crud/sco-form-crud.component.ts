
import { Component, ContentChild, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import { ScoCallback } from './../../common/sco-callback';
import { ScoNgModelBase } from './../sco-ng-model-base/sco-ng-model-base.component';
import { ScoResolutionService } from './../../services/sco-resolution/sco-resolution.service';
import { ScoModalService } from './../sco-modal/sco-modal.service';
import { ScoSelectedItem } from './../../common/sco-selected-item';
import { ScoAction } from '../../common/sco-action';
import { ScoBlockItem } from './../sco-block-list/model/sco-block-item';
import { ScoTableItem } from './../sco-table/model/sco-table.item';
import { ScoTableCol } from './../sco-table/model/sco-table-cols';
import { ScoConstantsService } from '../../services/sco-constants.service';

@Component({
  selector: 'sco-form-crud',
  templateUrl: './sco-form-crud.component.html',
  styleUrls: ['./sco-form-crud.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoFormCrudComponent),
      multi: true
    }
  ]
})
export class ScoFormCrudComponent<T, K = {}> extends ScoNgModelBase implements OnInit {

  /* Filter */
  @Input() showFilterPanel: boolean = true;
  @ContentChild('templateFilter', { static: false }) templateFilter: TemplateRef<any>;

  /* Change View */
  @Input() showChangeView: boolean = true;
  @Input() changeViewTableBtnIcon: string = 'fa fa-table';
  @Input() changeViewTableBtnTransparent: boolean = true;
  @Input() changeViewBlocklistBtnIcon: string = 'fa fa-th-large';
  @Input() changeViewBlocklistBtnTransparent: boolean = true;

  /* Excel */
  @Input() showExcelDownloadBtn: boolean = true;
  @Input() excelDownloadBtnIcon: string = 'fa fa-download';
  @Input() excelDownloadBtnTransparent: boolean = true;
  @Output() onDownloadExcel: EventEmitter<boolean>;

  /* Add Element */
  @Input() addElementBtnIcon: string = 'fa fa-plus';
  @Input() addElementBtnTransparent: boolean = true;

  /* Formcrud */
  @Input() enableKeyboardBinds: boolean = true;
  @Input() tableDefaultView: boolean = true;
  @Input() tableCols: ScoTableCol[] = []; // Lista de columnas de la tabla
  @Input() tableItems: ScoTableItem<T>[] = []; // Lista para almacenar los items creados para la tabla
  @Input() blockItems: ScoBlockItem<T>[] = []; // Lista para almacenar los items creados para el block list
  @Input() tableItemsPage: number = 8;
  @Input() blocklistItemsPage: number = 5;
  @Input() labelTotalResults: string = 'Total de elementos:';
  @Input() labelNoResults: string = 'No hay elementos que mostrar';
  @Input() showActions: boolean = true;
  @Input() showTotalItems: boolean = true;
  @Input() canSelectItems: boolean = false;
  @Input() previousLabel: string = 'Anterior';
  @Input() nextLabel: string = 'Siguiente';
  @Input() paginationOnTop: boolean = false;
  @Input() closeFormWhenCancel: boolean = true;
  @Output() itemSelected: EventEmitter<ScoSelectedItem<T>>;
  @Output() actionSelected: EventEmitter<ScoAction<T>>;
  @Output() changePage: EventEmitter<number>;
 
  /* Table */
  @Input() showTableIndex: boolean = true;
  @Input() showTableAddBtn: boolean = true;
  @Input() tableActionsMarginBottom: number = undefined;
  @ContentChild('templateRow', { static: false }) templateRow: TemplateRef<any>;
  @Output() closeOptions: EventEmitter<MouseEvent>;
  @Output() goToCreate: EventEmitter<T>;

  /* Blocklist */
  @Input() showBlocklistHeader: boolean = false;
  @Input() showBlocklistInfoAdditional: boolean = false;
  @Input() showBlocklistBorder: boolean = true;
  @Input() blocklistActionsMarginBottom: number = undefined;
  @ContentChild('templateHeader', { static: false }) templateHeader: TemplateRef<any>;
  @ContentChild('templateInfoAdditional', { static: false }) templateInfoAdditional: TemplateRef<any>;
  @ContentChild('templateData', { static: false }) templateData: TemplateRef<any>;

  /* Form */
  @Input() formShowTitle: boolean = true;
  @Input() formCenterTitle: boolean = true;
  @Input() formPadding: boolean = true;
  @Input() formNewItemTitle: string = 'Nuevo elemento';
  @Input() formUpdateItemTitle: string = 'Actualizar elemento';
  @Input() formUpdateItemTitleProperty: string = 'name';
  @Input() formButtonsPosition: string = this.constantsService.ScoFormCrudConstants.FORM_BUTTONS_POSITION_RIGHT;
  @Input() formButtonsPaddingClasses: string = '';
  @Input() formCancelButtonLabel: string = 'Cancelar';
  @Input() formCreateButtonLabel: string = 'Crear';
  @Input() formUpdateButtonLabel: string = 'Actualizar';
  @Input() formBackButton: boolean = true;
  @Input() formBackButtonIcon: string = "fa fa-arrow-left";
  @Input() formBackButtonTransparent: boolean = true;
  @Input() formBackButtonPosition: string = this.constantsService.ScoFormCrudConstants.FORM_BUTTONS_POSITION_LEFT;
  @Input() formBackButtonPaddingClasses: string = '';
  @Input() formAlwaysVisible: boolean = false;
  @Output() onFormCancel: EventEmitter<T>;
  @Output() onFormConfirm: EventEmitter<ScoCallback<T>>;
  @Output() onFormClose: EventEmitter<T>;
  @ContentChild('templateForm', { static: false }) templateForm: TemplateRef<any>;

  /* Delete Modal */
  @Input() deleteModalConfirmLabel: string = 'Eliminar';
  @Input() deleteModalCancelLabel: string = 'Cancelar';
  @Input() deleteModalTitle: string = 'Eliminar elemento';
  @Input() deleteModalContent: string = '¿Realmente quiere eliminar el elemento';
  @Input() elementSelectedProperty: string = 'name';
  @Output() onConfirmDeleteModal: EventEmitter<boolean>;
  @Output() onCloseDeleteModal: EventEmitter<boolean>;

  public manageMode: string; // Indicador para el formulario new/update del formulario
  public showMode: string; // Indica si motrar los elementos en tabla o en block list
  public totalItemsPage: number; // Indicador para el total de elementos por página
  public elementSelected: T; // Objeto para almacenar el elemento seleccionado en las acciones de la tabla / block list
  public itemForm: T;
  public itemFormProperty: any;
  private _lastShowMode: string; // Guarda el valor de showMode antes de abrir el formulario new/update, al cerrar el fomulario, se abrira la vista según este indicador

  constructor(
    public readonly constantsService: ScoConstantsService,
    public readonly modalsService: ScoModalService,
    public readonly resolutionService: ScoResolutionService,
  ) { 
    super();

    this.onDownloadExcel = new EventEmitter<boolean>();
    this.itemSelected = new EventEmitter<ScoSelectedItem<T>>();
    this.actionSelected = new EventEmitter<ScoAction<T>>();
    this.changePage = new EventEmitter<number>();
    this.closeOptions = new EventEmitter<MouseEvent>();
    this.goToCreate = new EventEmitter<T>();
    this.onFormCancel = new EventEmitter<T>();
    this.onFormConfirm = new EventEmitter<ScoCallback<T>>();
    this.onFormClose = new EventEmitter<T>();
    this.onConfirmDeleteModal = new EventEmitter<boolean>();
    this.onCloseDeleteModal = new EventEmitter<boolean>();
  }

  /* Angular Flow Functions */
  ngOnInit(): void {
    this.manageMode = this.formAlwaysVisible ? this.constantsService.ScoFormCrudConstants.MODE_NEW : '';
    this.showMode = this.tableDefaultView 
      ? this.constantsService.ScoFormCrudConstants.SHOW_TABLE 
      : this.constantsService.ScoFormCrudConstants.SHOW_BLOCK_LIST;
    this.totalItemsPage = this.tableDefaultView 
      ? this.tableItemsPage 
      : this.blocklistItemsPage;
    this.elementSelected = undefined;
    this.itemForm = {} as T;
    this.itemFormProperty = undefined;
    this._lastShowMode = this.showMode;
  }

  /* Change View */
  changeTableMode(): void {
    this.totalItemsPage = this.tableItemsPage;
    this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_TABLE;
  }

  changeBlockListMode(): void {
    this.totalItemsPage = this.blocklistItemsPage;
    this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_BLOCK_LIST;
  }

  /* Table and Block list Functions */ 
  selectItem($event: ScoSelectedItem<T>): void {
    this.itemSelected.emit($event);
  }

  onCloseOptions($event: MouseEvent): void {
    this.closeOptions.emit($event);
  }

  getAction($event: ScoAction<T>) {
    this.elementSelected = $event.item;

    if ($event.value == this.constantsService.ScoFormCrudConstants.UPDATE_ACTION) {
      this.itemForm = cloneDeep($event.item);
      this.itemFormProperty = this.formUpdateItemTitleProperty ? this.itemForm[this.formUpdateItemTitleProperty] : undefined;
      this.manageMode = this.constantsService.ScoFormCrudConstants.MODE_UPDATE;

      if (!this.formAlwaysVisible) {
        this._lastShowMode = this.showMode;
        this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_FORM;
      }
    }

    if ($event.value == 'delete') {
      this.modalsService.open("form-crud-delete-modal");
    }

    this.actionSelected.emit($event);
  } 

  onChangePage($event: number): void {
    this.changePage.emit($event);
  }

  /* Form Actions */
  openForm(): void {
    this.itemForm = {} as T;
    this.itemFormProperty = undefined;
    this.elementSelected = undefined;
    this.manageMode = this.constantsService.ScoFormCrudConstants.MODE_NEW;

    if (!this.formAlwaysVisible) {
      this._lastShowMode = this.showMode;
      this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_FORM;
    }

    this.goToCreate.emit(this.itemForm);
  }

  closeForm(preventPropagation: boolean = false): void {
    this.manageMode = this.formAlwaysVisible ? this.constantsService.ScoFormCrudConstants.MODE_NEW : '';
    this.itemForm = {} as T;
    this.itemFormProperty = undefined;
    this.setChangeView();

    if (!preventPropagation) {
      this.onFormClose.emit(this.itemForm);
    }
  }

  confirmForm(): void {
    this.onFormConfirm.emit({ item: this.itemForm, callBack: () => {
        this.manageMode = this.formAlwaysVisible ? this.constantsService.ScoFormCrudConstants.MODE_NEW : '';
        this.itemForm = {} as T;
        this.itemFormProperty = undefined;

        if (!this._lastShowMode && !this.formAlwaysVisible) {
          if (this.tableDefaultView) {
            this.totalItemsPage = this.tableItemsPage;
            this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_TABLE;
          } else {
            this.totalItemsPage = this.blocklistItemsPage;
            this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_BLOCK_LIST;
          }
        } else {
          if (this._lastShowMode == this.constantsService.ScoFormCrudConstants.SHOW_TABLE) {
            this.totalItemsPage = this.tableItemsPage;
            this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_TABLE;
          } else {
            this.totalItemsPage = this.blocklistItemsPage;
            this.showMode = this.constantsService.ScoFormCrudConstants.SHOW_BLOCK_LIST;
          }
        }

        if (this.formAlwaysVisible) {
          this.goToCreate.emit(this.itemForm);
        }
      } 
    });
  }

  cancelForm(): void {
    this.manageMode = this.formAlwaysVisible ? this.constantsService.ScoFormCrudConstants.MODE_NEW : '';
    this.itemForm = {} as T;
    this.itemFormProperty = undefined;
    this.onFormCancel.emit(this.itemForm);

    if (this.closeFormWhenCancel) {
      this.closeForm(true);
    }
  }

  /* Excel */
  donwloadExcelFile(): void {
    this.onDownloadExcel.emit(true);
  }

  /* Delete Modal */
  onCloseModal($event: MouseEvent): void {
    this.elementSelected = undefined;
    this.onCloseDeleteModal.emit(true);
  }

  onConfirmModal($event: MouseEvent): void {
    this.elementSelected = undefined;
    this.onConfirmDeleteModal.emit(true);
  }

  /* Keyboard Event Listener */
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.enableKeyboardBinds) {
      return;
    }

    if (event.key == 'Enter') {
      if (this.showMode == 'form') {
        this.confirmForm();
      } else {
      }
    }

    if (event.key == 'Escape') {
      if (this.showMode == 'form') {
        this.closeForm();
      }
    }

    if (event.key == '+') {
      if (this.showMode != 'form') {
        this.openForm();
      }
    }

    if (event.key == 'º') {
      if (this.showMode != 'form') {
        if (this.showMode == 'block-list') {
          this.changeTableMode();
        } else {
          this.changeBlockListMode();
        }
      }
    }
  }

  private setChangeView(): void {
    if (!this._lastShowMode) {
      if (this.tableDefaultView) {
        this.changeTableMode();
      } else {
        this.changeBlockListMode();
      }
    } else {
      if (this._lastShowMode == this.constantsService.ScoFormCrudConstants.SHOW_TABLE) {
        this.changeTableMode();
      } else {
        this.changeBlockListMode();
      }
    }
  }
}