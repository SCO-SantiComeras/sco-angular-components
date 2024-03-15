import { Component, OnInit } from '@angular/core';
import { ScoSelectItem } from 'projects/sco-angular-components/src/common/sco-select-item';
import { ScoToastService } from 'projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-checkbox',
  templateUrl: './showcase-sco-checkbox.component.html',
  styleUrls: ['./showcase-sco-checkbox.component.scss']
})
export class ShowcaseScoCheckboxComponent implements OnInit {

  options1: ScoSelectItem<string>[];
  options2: ScoSelectItem<string>[];
  options3: ScoSelectItem<any>[];
  options4: ScoSelectItem<any>[];

  value1: string[];
  value2: string[];
  value3: any[];
  value4: any[];
  value5: boolean;

  constructor(
    public readonly cacheService: ScoCacheService,
    public readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement('title', 'Checkbox');
  }

  ngOnInit() {
     this.options1 = [
      {label: 'Java', value: 'java'},
      {label: 'Angular', value: 'angular'},
      {label: 'NestJS', value: 'nestjs'},
      {label: 'Javascript', value: 'javascript'},
      {label: 'C', value: 'c'},
      {label: 'C++', value: 'cpp'}
    ];

    this.options2 = [
      {label: 'Java', value: 'java'},
      {label: 'Angular', value: 'angular'},
      {label: 'NestJS', value: 'nestjs'},
      {label: 'Javascript', value: 'javascript'},
      {label: 'C', value: 'c'},
      {label: 'C++', value: 'cpp'}
    ];

    this.options3 = [
      {label: 'Java', value: {property1: 'p1', property2: 'p2'}},
      {label: 'Angular', value: {property1: 'p3', property2: 'p4'}},
      {label: 'NestJS', value: {property1: 'p5', property2: 'p6'}},
      {label: 'Javascript', value: {property1: 'p7', property2: 'p8'}},
      {label: 'C', value: {property1: 'p9', property2: 'p10'}},
      {label: 'C++', value: {property1: 'p11', property2: 'p12'}}
    ];

    this.options4 = [
      {label: 'Java', value: {property1: 'p1', property2: 'p2'}},
      {label: 'Angular', value: {property1: 'p3', property2: 'p4'}},
      {label: 'NestJS', value: {property1: 'p5', property2: 'p6'}},
      {label: 'Javascript', value: {property1: 'p7', property2: 'p8'}},
      {label: 'C', value: {property1: 'p9', property2: 'p10'}},
      {label: 'C++', value: {property1: 'p11', property2: 'p12'}}
    ];

    this.value2 = ['java', 'c'];
    this.value4 = [{property1: 'p1', property2: 'p2'}, {property1: 'p9', property2: 'p10'}];

    this.value5 = true;
  }
}