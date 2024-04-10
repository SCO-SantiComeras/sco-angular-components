import { ScoFormError } from './sco-form-error.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoFormError'
})
export class ScoFormErrorsPipe implements PipeTransform {

  constructor() {}

  transform(formErrors: ScoFormError[], formControlName: string): any {
    const errorMsg: ScoFormError = formErrors.find(f => f.formControlName == formControlName);
    if (errorMsg) {
      return errorMsg.error ? errorMsg.error : '';
    }

    return '';
  }
}
