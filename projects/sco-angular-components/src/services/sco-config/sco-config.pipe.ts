import { Pipe, PipeTransform } from '@angular/core';
import { ScoConfigService } from './sco-config.service';

@Pipe({
  name: 'scoConfig'
})
export class ScoConfigPipe implements PipeTransform {

  constructor(private configService: ScoConfigService) {}

  transform(path: string): any {
    return this.configService.getData(path);
  }
}
