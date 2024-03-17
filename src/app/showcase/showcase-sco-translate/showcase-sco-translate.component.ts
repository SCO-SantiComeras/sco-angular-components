import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoTranslateService } from '../../../../projects/sco-angular-components/src/services/sco-translate/sco-translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-translate',
  templateUrl: './showcase-sco-translate.component.html',
  styleUrls: ['./showcase-sco-translate.component.scss']
})

export class ShowcaseScoTranslateComponent implements OnInit {

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly translateService: ScoTranslateService,
    private readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement("title", "Translate Service");
  }

  ngOnInit() {
    this.toastService.addInfoMessage("label.example.1", this.translateService.getTranslate('label.example.1'));
    this.toastService.addInfoMessage("label.example.2", this.translateService.getTranslate('label.example.2'));
  }
}