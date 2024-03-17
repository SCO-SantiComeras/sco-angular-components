import { Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
  
  @Input() labelAddItem: string;
  @Input() labelEmpty: string;
  @Input() label: boolean;

  public listShow: string[] = [];

  constructor(public readonly constantsService: ScoConstantsService) {
    super();
    this.value = [];
    this.listShow = [];
  }

  ngOnInit(): void {
    this.listShow.push('');

    this.firstValue.subscribe((v) => {
      if (v) {
        this.listShow = cloneDeep(v);
      } else {
        this.value = [''];
      }
    });
  }

  addItemList() {
    this.value.push('');
    this.listShow.push('');
  }

  deleteListItem(index: number) {
    this.value.splice(index, 1);
    this.listShow.splice(index, 1);
  }
}
