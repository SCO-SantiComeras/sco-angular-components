import { Component, ContentChild, ElementRef, forwardRef, Input, Output, TemplateRef, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';

@Component({
  selector: 'sco-textarea',
  templateUrl: './sco-textarea.component.html',
  styleUrls: ['./sco-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {       
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ScoTextareaComponent),
      multi: true     
    }   
  ]
})
export class ScoTextareaComponent extends ScoNgModelBase {

  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() required: boolean = false;
  @Input() validate: boolean = false;
  @Input() inline: boolean = false;
  @Input() rows: number = 4;
  @Input() cols: number = 10;

  @ViewChild('textarea', {static: false, read: ElementRef}) textarea: ElementRef;

  @ContentChild('templateValid', { static: false }) templateValid: TemplateRef<any>;
  @ContentChild('templateErrors', { static: false }) templateErrors: TemplateRef<any>;

  @Output() clickTextarea: EventEmitter<MouseEvent>;

  constructor() {
    super();
    this.clickTextarea = new EventEmitter<MouseEvent>();
  }

  onclick($event: MouseEvent){
    this.clickTextarea.emit($event);
  }
}
