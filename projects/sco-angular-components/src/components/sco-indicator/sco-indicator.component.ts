import { Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';
import { ScoConstantsService } from '../../services/sco-constants.service';
import { ScoThemeService } from '../../services/sco-theme.service';

@Component({
  selector: 'sco-indicator',
  templateUrl: './sco-indicator.component.html',
  styleUrls: ['./sco-indicator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoIndicatorComponent),
      multi: true,
    },
  ],
})
export class ScoIndicatorComponent extends ScoNgModelBase implements OnInit {

  @Input() size: number = 100;
  @Input() strokeWidth: number = 14;
  @Input() showPercentage: boolean = false;

  @Input() color: string;

  constructor(
    private readonly themeService: ScoThemeService,
    private readonly constantsService: ScoConstantsService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.changeColor();
  }

  changeColor(){
    if(!this.color){
      // Mejorarlo cogiendo las variables de scss de los themes
      switch(this.themeService.theme){
        case this.constantsService.ScoThemeConstants.THEME_DEFAULT:
          this.color = '#4682B4';
          break;
        case this.constantsService.ScoThemeConstants.THEME_DARK:
          this.color = '#000';
          break;
        case this.constantsService.ScoThemeConstants.THEME_BLUE:
          this.color = 'blue';
          break;
      }
    }
  }
}
