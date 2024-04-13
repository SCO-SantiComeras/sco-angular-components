import { ScoResolutionService } from '../../services/sco-resolution/sco-resolution.service';
import { ScoTableCol } from './model/sco-table-cols';
import { cloneDeep } from 'lodash-es';
import { ScoConstantsService } from '../../services/sco-constants.service';
import { ScoTableItem } from './model/sco-table.item';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ScoAction } from '../../common/sco-action';
import { ScoSelectedItem } from '../../common/sco-selected-item';

@Component({
  selector: 'sco-table',
  templateUrl: './sco-table.component.html',
  styleUrls: ['./sco-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoTableComponent<T> implements OnInit {

  @Input() cols: ScoTableCol[] = [];
  @Input() tableItems: ScoTableItem<T>[] = [];
  @Input() labelTotalResults: string = 'Total elementos';
  @Input() labelNoResults: string = "No hay elementos que mostrar";
  @Input() showActions: boolean = true;
  @Input() showTotalItems: boolean = true;
  @Input() showTableIndex: boolean = true;
  @Input() canSelectItems: boolean = true;
  @Input() pagination: number = this.constantsService.ScoTableConstants.PAGINATION_DEFAULT;
  @Input() previousLabel: string = "Anterior";
  @Input() nextLabel: string = "Siguiente";
  @Input() paginationOnTop: boolean = false;
  @Input() templateRowInput: TemplateRef<any>;
  @Input() showAddCrudBtn: boolean = true;

  @Output() itemSelected: EventEmitter<ScoSelectedItem<T>>;
  @Output() actionSelected: EventEmitter<ScoAction<T>>;
  @Output() closeOptions: EventEmitter<MouseEvent>;
  @Output() changePage: EventEmitter<number>;
  @Output() goToCreate: EventEmitter<boolean>;

  @ContentChild('templateRow', { static: false }) templateRow: TemplateRef<any>;

  public page: number;
  public showOptions: boolean;
  public showOptionsIndex: number;
  public totalItemslabel: string;

  constructor(
    public readonly resolutionService: ScoResolutionService,
    public readonly constantsService: ScoConstantsService
  ) { 
    this.itemSelected = new EventEmitter<ScoSelectedItem<T>>();
    this.actionSelected = new EventEmitter<ScoAction<T>>();
    this.closeOptions = new EventEmitter<MouseEvent>();
    this.changePage = new EventEmitter<number>();
    this.goToCreate = new EventEmitter<boolean>();
    this.page = 1;
    this.showOptions = false;
    this.showOptionsIndex = -1;
    this.totalItemslabel = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['tableItems'] && !changes['tableItems'].firstChange) {
        if ( ((this.page - 1) * this.pagination) == changes['tableItems'].currentValue.length) {
          this.page = this.page -1;
        }
      }

      if (changes['tableItems'].currentValue.length > 0) {
        this.totalItemslabel = `${this.labelTotalResults}: ` + changes['tableItems'].currentValue.length;
      }

      // TODO: Fixear no se ve el filtrado desde otra página que no sea la 1.
      // TOOD: Habría que controlar cuando se hace filtrado, y cuando se elimina de una pagina para volver a la anterior
      this.page = 1;
    }
  }

  ngOnInit() {
    this.totalItemslabel = `${this.labelTotalResults}: ` + this.tableItems.length;
  }

  openActions($event: MouseEvent, item: ScoTableItem<T>) {
    $event.stopPropagation();
    this.showOptions = true;
    this.showOptionsIndex = item.index;
    this.closeOptions.emit($event);
  }

  sendAction($event: MouseEvent, action: ScoAction<T>, index: number) {
    // El parametro Index indica el indice de la lista de acciones del item, no del index del item en la lista de items  
    $event.stopPropagation();
    this.showOptions = false;

    let actionSended: ScoAction<T> = cloneDeep(action);
    actionSended.item = this.tableItems[this.showOptionsIndex].item;

    this.actionSelected.emit(actionSended);
  }

  hideOptions($event: MouseEvent) {
    $event.stopPropagation();
    this.showOptions = false;
    this.showOptionsIndex = -1;
  }

  onSelectItem($event: Event, item: ScoSelectedItem<T>) {
    $event.stopPropagation();
    if (this.canSelectItems) {
      this.itemSelected.emit(item);
    }
  }

  onPageChange($event) {
    this.page = $event;
    this.changePage.emit(this.page);
  }

  onClickAddCrudBtn() {
    this.goToCreate.emit(true);
  }
}
