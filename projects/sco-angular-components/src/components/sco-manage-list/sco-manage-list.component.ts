import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';
import { ScoConstantsService } from '../../services/sco-constants.service';

@Component({
  selector: 'sco-manage-list',
  templateUrl: './sco-manage-list.component.html',
  styleUrls: ['./sco-manage-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoManageListComponent),
      multi: true,
    },
  ],
})
export class ScoManageListComponent extends ScoNgModelBase implements OnInit {
  
  @Input() label: string;
  @Input() labelAddItem: string;
  @Input() labelEmpty: string;

  @Output() change: EventEmitter<string[]>;

  public listShow: string[];

  constructor(public readonly constantsService: ScoConstantsService) {
    super();
    this.change = new EventEmitter<string[]>();
    this.value = [];
    this.listShow = [];
  }

  ngOnInit(): void {
    this.listShow.push('');
    this.changeValue.subscribe((v) => {
      if (!v || (v && v.length == 0)) {
        this.value = [''];
      } else {
        this.listShow = cloneDeep(v);
      }
    });
  }

  addItemList() {
    this.value.push('');
    this.listShow.push('');
    this.change.emit(this.value && this.value.length > 0 ? this.value : []);
  }

  deleteListItem(index: number) {
    if (this.value && this.value.length > 0) {
      this.value.splice(index, 1);
    }
    if (this.listShow && this.listShow.length > 0) {
      this.listShow.splice(index, 1);
    }
    this.change.emit(this.value && this.value.length > 0 ? this.value : []);
  }

  onInputKeyUp(): void {
    if (this.value && this.value.length > 0) {
      this.change.emit(this.value);
    } else {
      this.change.emit([]);
    }
  }
}
