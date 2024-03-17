import { Component } from '@angular/core';
import { ScoToastService } from 'projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';
import { ScoConstantsService } from 'projects/sco-angular-components/src/services/sco-constants.service';

@Component({
  selector: 'app-showcase-sco-calendar',
  templateUrl: './showcase-sco-calendar.component.html',
  styleUrls: ['./showcase-sco-calendar.component.scss']
})
export class ShowcaseScoCalendarComponent {

  value1: Date;
  value2: Date;
  value3: Date = new Date(2021, 0, 1);
  value4: Date[];
  value5: Date[];
  value6: Date;
  value7: Date = new Date();
  value8: Date = new Date();
  value9: Date;

  constructor(
    public readonly constantsService: ScoConstantsService,
    public readonly cacheService: ScoCacheService,
    public readonly toastService: ScoToastService
  ) {
    this.cacheService.setElement('title', 'Calendar');
    this.value7.setHours(8, 30);
  }

  selectEx2($event: Date) {
    this.toastService.addSuccessMessage("Seleccion fecha", "Fecha elegida: " + $event);
  }

  selectEx4($event: Date[]) {
    this.toastService.addSuccessMessage("Seleccion fecha", "Fecha/s elegida/s: " + $event);
    this.toastService.addSuccessMessage("Seleccion fecha", "Fecha/s elegida/s en el value4: " + this.value4);
  }

  selectEx5($event: Date[]) {
    this.toastService.addSuccessMessage("Seleccion fecha", "Rango de fechas: " + $event);
    this.toastService.addSuccessMessage("Seleccion fecha", "Fecha/s elegida/s en el value5: " + this.value5);
  }

  selectEx6($event: Date) {
    this.toastService.addSuccessMessage("Seleccion fecha", "Fecha y tiempo elegida: " + $event);
  }

  selectEx7($event: Date) {
    this.toastService.addSuccessMessage("Seleccion fecha", "Tiempo elegido: " + $event);
  }

  selectEx9($event: Date[]) {
    this.toastService.addSuccessMessage("Seleccion fecha", "Rango de fechas: " + $event);
    this.toastService.addSuccessMessage("Seleccion fecha", "Fecha/s elegida/s en el value5: " + this.value9);
  }

  clearClick($event: MouseEvent) {
    this.toastService.addSuccessMessage("Limpiar fecha", "Fecha limpiada");
  }
}