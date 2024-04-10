import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ScoFormError } from './sco-form-error.model';

@Injectable({
  providedIn: 'root'
})
export class ScoFormErrorsService {

  constructor() { }

  public existError(formControlName: string, formErrors: ScoFormError[]): boolean {
    if (!formControlName) {
      return false;
    }

    if (!formErrors || (formErrors && formErrors.length == 0)) {
      return false;
    }

    if (!formErrors.find(e => e.formControlName == formControlName)) {
      return false;
    }

    return true;
  }

  public setErrors(form: FormGroup, formErrors: ScoFormError[]): FormGroup {
    if (!form) {
      return undefined;
    }

    const keys: string[] = Object.keys(form.controls);
    if (!keys || (keys && keys.length == 0)) {
      return form;
    }

    for (const control of keys) {
      const controlError = formErrors.find(e => e.formControlName == control);
      if (controlError) {
        form.controls[control].setErrors({'incorrect': true});
      } else {
        form.controls[control].setErrors(undefined);
      }
    }

    return form;
  }

  public getError(formControlName: string, formErrors: ScoFormError[]): string {
    if (!formControlName) {
      return undefined;
    }

    if (!formErrors || (formErrors && formErrors.length == 0)) {
      return undefined;
    }

    const formError: ScoFormError = formErrors.find(e => e.formControlName == formControlName);
    if (!formError) {
      return undefined;
    }

    return formError.error;
  }

  public cleanErrors(form: FormGroup): FormGroup {
    form.reset();

    const keys: string[] = Object.keys(form.controls);
    if (keys && keys.length > 0) {
      for (const control of keys) {
        form.controls[control].setErrors(undefined);
      }
    }

    return form;
  }

  public touchEmptyControls(form: FormGroup): FormGroup {
    const keys: string[] = Object.keys(form.controls);
    if (keys && keys.length > 0) {
      for (const control of keys) {
        if (
          form.controls[control].value != undefined 
          && form.controls[control].value != null 
          && form.controls[control].value != ''
        ) {
          continue;
        } 

        form.controls[control].markAllAsTouched();
      }
    }

    return form;
  }
}
