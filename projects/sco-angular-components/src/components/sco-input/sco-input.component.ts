import { ScoConstantsService } from '../../services/sco-constants.service';
import { Component, forwardRef, Input, Output, ViewEncapsulation, EventEmitter, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';

@Component({
  selector: 'sco-input',
  templateUrl: './sco-input.component.html',
  styleUrls: ['./sco-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoInputComponent),
      multi: true
    }
  ]
})

export class ScoInputComponent extends ScoNgModelBase implements OnInit {

  @Input() type: string = this.constantsService.ScoInputTypeConstants.TEXT;
  @Input() label: string;
  @Input() showLabel: boolean = false;
  @Input() icon: string;
  @Input() showIcon: boolean = false;
  @Input() enabledIconClick: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false
  @Input() placeHolder: string = '';
  @Input() inLine: boolean = false;
  @Input() require: boolean = false;

  @Output() iconClick: EventEmitter<boolean>;
  @Output() inputChange: EventEmitter<boolean>;

  private possiblesTypes: string[];

  constructor(private readonly constantsService: ScoConstantsService) { 
    super();
    
    this.possiblesTypes = [
      this.constantsService.ScoInputTypeConstants.TEXT,
      this.constantsService.ScoInputTypeConstants.PASSWORD,
      this.constantsService.ScoInputTypeConstants.EMAIL,
      this.constantsService.ScoInputTypeConstants.NUMBER,
    ];

    this.iconClick = new EventEmitter<boolean>();
    this.inputChange = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    if (!this.possiblesTypes.find(t => t === this.type)) {
      console.error("Sco-input: Type not exist");
      return;
    }
  }

  onIconClick() {
    this.iconClick.emit(true);
  }

  onInputChange() {
    this.inputChange.emit(true);
  }
}
