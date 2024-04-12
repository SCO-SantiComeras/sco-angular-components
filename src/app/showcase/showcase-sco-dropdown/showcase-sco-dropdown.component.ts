import { ScoConstantsService } from 'projects/sco-angular-components/src/public-api';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoSelectItem } from '../../../../projects/sco-angular-components/src/common/sco-select-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-dropdown',
  templateUrl: './showcase-sco-dropdown.component.html',
  styleUrls: ['./showcase-sco-dropdown.component.scss']
})

export class ShowcaseScoDropdownComponent<T> implements OnInit {

  public options: ScoSelectItem<T>[] = [];
  public valueEx2: any;
  public valueEx3: any;
  public valueEx5: any;
  public valueEx6: any;
  public setSelectedItemEx6: any;

  constructor(
    private readonly toastService: ScoToastService,
    private readonly cacheService: ScoCacheService,
    public readonly constantsService: ScoConstantsService,
  ) { 
    this.cacheService.setElement("title", "Dropdown");
  }

  ngOnInit() {
    this.options = [
      new ScoSelectItem("Label1", "Value1"),
      new ScoSelectItem("Label2", "Value2"),
      new ScoSelectItem("Label3", "Value3"),
      new ScoSelectItem("Label4", "Value4"),
    ];

    this.valueEx2 = "";
    this.valueEx3 = "";
    this.valueEx5 = "Value4";
    this.valueEx6 = "Value2";
    this.setSelectedItemEx6 = undefined;
  }

  select($event) {
    this.toastService.addInfoMessage("Éxito", `Has elegido: ${JSON.stringify($event)}`);
  }

  onSetSelectedItemEx6() {
    this.valueEx6 = "Value3";
    this.setSelectedItemEx6 = this.options.find(o => o.value == this.valueEx6);
  }
}
