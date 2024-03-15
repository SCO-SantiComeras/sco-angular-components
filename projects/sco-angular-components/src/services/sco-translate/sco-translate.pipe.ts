import { ScoTranslateService } from './sco-translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoTranslate'
})
export class ScoTranslatePipe implements PipeTransform {

  constructor(private translateService: ScoTranslateService) {}

  transform(value: any): any {
    return this.translateService.getTranslate(value) 
      ? this.translateService.getTranslate(value) 
      : value;
  }
}
