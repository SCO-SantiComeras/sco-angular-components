import { ScoSelectedItem } from '../../../common/sco-selected-item';
import { ScoBlockListItemComponent } from '../sco-block-list-item/sco-block-list-item.component';
import { ScoConstantsService } from '../../../services/sco-constants.service';
import { ScoAction } from '../../../common/sco-action';
import { ScoBlockItem } from '../model/sco-block-item';
import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ContentChild, TemplateRef, ViewChildren, QueryList, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sco-block-list',
  templateUrl: './sco-block-list.component.html',
  styleUrls: ['./sco-block-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoBlockListComponent<T> implements OnInit, OnChanges {

  @Input() blockItems: ScoBlockItem<T>[];
  @Input() labelTotalResults: string = 'Total elementos';
  @Input() labelNoResults: string = "No results";

  @Input() showTotalItems: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() showInfoAdditional: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showBorder: boolean = true;
  @Input() canSelectItems: boolean = true;

  @Input() pagination: number = this.constantsService.ScoBlockListConstants.PAGINATION_DEFAULT;
  @Input() previousLabel: string = "Previus";
  @Input() nextLabel: string = "Next";
  @Input() paginationOnTop: boolean = false;

  @Output() itemSelected: EventEmitter<ScoSelectedItem<T>>;
  @Output() actionSelected: EventEmitter<ScoAction<T>>;
  @Output() pageChange: EventEmitter<number>;

  @ContentChild("templateHeader", {static: false}) templateHeader: TemplateRef<any>;
  @ContentChild("templateInfoAdditional", {static: false}) templateInfoAdditional: TemplateRef<any>;
  @ContentChild("templateData", {static: false}) templateData: TemplateRef<any>;

  public page: number;
  public totalItemsLabel: string;

  @ViewChildren(ScoBlockListItemComponent) blocks: QueryList<ScoBlockListItemComponent<T>>;

  constructor(
    private readonly constantsService: ScoConstantsService
  ) { 
    this.itemSelected = new EventEmitter<ScoSelectedItem<T>>();
    this.actionSelected = new EventEmitter<ScoAction<T>>();
    this.pageChange = new EventEmitter<number>();
    this.page = 1;
    this.totalItemsLabel = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['blockItems'] && !changes['blockItems'].firstChange) {
        if ( ((this.page - 1) * this.pagination) == changes['blockItems'].currentValue.length) {
          this.page = this.page -1;
        }
      }

      if (changes['blockItems'] && changes['blockItems'].currentValue.length > 0) {
        this.totalItemsLabel = `${this.labelTotalResults}: ` + changes['blockItems'].currentValue.length;
      }

      // TODO: Fixear no se ve el filtrado desde otra página que no sea la 1.
      // TOOD: Habría que controlar cuando se hace filtrado, y cuando se elimina de una pagina para volver a la anterior
      this.page = 1;
    }
  }

  ngOnInit() {
    if (this.pagination < 0)
      this.pagination = this.constantsService.ScoBlockListConstants.PAGINATION_DEFAULT;

    this.totalItemsLabel = `${this.labelTotalResults}: ` + this.blockItems.length;
  }

  sendAction($event: ScoAction<T>) {
    this.actionSelected.emit($event)
  }

  selectItem(blockItem: ScoBlockItem<T>, index: number) {
    if (this.canSelectItems) {
      let selectedItem = new ScoSelectedItem<T>();
      selectedItem.item = blockItem.item;
      selectedItem.index = ((this.page - 1) * this.pagination) + index;
      this.itemSelected.emit(selectedItem);
    }
  }

  closeAllOptionsExcept(id: string) {
    this.blocks.forEach(block => {
      if (block.id != id) {
        block.showOptions = false;
      }
    });
  }

  onPageChange($event) {
    this.page = $event;
    this.pageChange.emit(this.page);
  }
}