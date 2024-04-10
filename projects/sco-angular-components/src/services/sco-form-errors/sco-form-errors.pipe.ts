import { Pipe, PipeTransform } from '@angular/core';
import { ScoFormErrorsService } from './sco-form-errors.service';

@Pipe({
  name: 'scoFormError'
})
export class ScoFormErrorsPipe implements PipeTransform {

  constructor(private readonly formErrorsService: ScoFormErrorsService) {}

  transform(value: any, args: any[]): any {
    const errorMsg: string = this.formErrorsService.getError(value, args[0]);
    if (errorMsg) {
      return errorMsg;
    }

    return '';
  }
}
