import { Component, OnInit } from '@angular/core';
import { ScoButton } from 'projects/sco-components-lib/src/components/sco-multiple-button/bean/sco-button';
import { ScoToastService } from 'projects/sco-components-lib/src/public-api';
import { ScoCacheService } from 'projects/sco-components-lib/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-multiple-button',
  templateUrl: './showcase-sco-multiple-button.component.html',
  styleUrls: ['./showcase-sco-multiple-button.component.scss']
})
export class ShowcaseScoMultipleButtonComponent implements OnInit {

  public buttonsEx1: ScoButton[];
  public buttonsEx2: ScoButton[];
  public buttonsEx3: ScoButton[];

  constructor(
    private readonly cacheService: ScoCacheService,
    private readonly toastService: ScoToastService
  ) { 
    this.cacheService.setElement('title', 'Multiple button');
  }

  ngOnInit() {
    this.buttonsEx1 = [
      {
        text: 'Button1',
        icon: 'fa fa-check',
        value: 'BUTTON_1_EX1'
      },
      {
        text: 'Button2',
        icon: 'fa fa-check',
        value: 'BUTTON_2_EX1'
      },
      {
        text: 'Button3',
        icon: 'fa fa-trash',
        value: 'BUTTON_3_EX1'
      }
    ];
    this.buttonsEx2 = [
      {
        text: '',
        icon: 'fa fa-check',
        value: 'BUTTON_1_EX2'
      },
      {
        text: '',
        icon: 'fa fa-trash',
        value: 'BUTTON_2_EX2'
      }
    ]
    this.buttonsEx3 = [
      {
        text: 'Button1',
        icon: 'fa fa-check',
        value: 'BUTTON_1_EX3'
      }
    ]
  }

  actionEx1($event: ScoButton){
    switch($event.value){
      case 'BUTTON_1_EX1':
        this.toastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del primer ejemplo')
        break;
      case 'BUTTON_2_EX1':
        this.toastService.addSuccessMessage('Éxito', 'Has pulsado el segundo boton del primer ejemplo')
        break;
      case 'BUTTON_3_EX1':
        this.toastService.addSuccessMessage('Éxito', 'Has pulsado el tercero boton del primer ejemplo')
        break;
    }
  }

  actionEx2($event: ScoButton){
    switch($event.value){
      case 'BUTTON_1_EX2':
        this.toastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del segundo ejemplo')
        break;
      case 'BUTTON_2_EX2':
        this.toastService.addSuccessMessage('Éxito', 'Has pulsado el segundo boton del segundo ejemplo')
        break;
    }
  }

  actionEx3($event: ScoButton){
    switch($event.value){
      case 'BUTTON_1_EX3':
        this.toastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del tercer ejemplo')
        break;
    }
  }

}
