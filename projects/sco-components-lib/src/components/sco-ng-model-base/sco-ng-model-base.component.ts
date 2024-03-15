import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: ''
})
export class ScoNgModelBase implements ControlValueAccessor {

  /* private _innerValue: any;

  public get value(): any {
    return this._innerValue;
  }

  public set value(value: any) {
    this._innerValue = value;
    if (this.onChange) {
      this.onChange(value);
    }
  }

  private _firstTime: boolean;

  private _firstValue: Subject<any>;

  public get firstValue(): Subject<any> {
    return this._firstValue;
  }

  public set firstValue(value: Subject<any>) {
    this._firstValue = value;
  }

  constructor() { 
    this._innerValue = null;
    this._firstTime = true;
    this._firstValue = new Subject<any>();
  }

  private onChange: (_: any) => {};

  writeValue(value: any): void {
    if (value !== this._innerValue) {
      this.value = value;
      if (this._firstTime) {
        this._firstValue.next(this.value);
        this._firstTime = false;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // } */

  private innerValue: any;
  private firstTime: boolean;
  public firstValue: Subject<any>;
  public changeValue: Subject<any>;

  constructor() {
    this.innerValue = null;
    this.firstValue = new Subject<any>();
    this.changeValue = new Subject<any>();
    this.firstTime = true;
   }

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
        this.innerValue = value;
        this.changeValue.next(this.innerValue);
        if(this.firstTime){
          this.firstValue.next(this.innerValue);
          this.firstTime = false;
        }
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
