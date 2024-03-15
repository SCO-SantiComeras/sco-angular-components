import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';
import { ScoConstantsService } from '../../services/sco-constants.service';

@Component({
  selector: 'sco-calendar',
  templateUrl: './sco-calendar.component.html',
  styleUrls: ['./sco-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoCalendarComponent),
      multi: true,
    },
  ],
})
export class ScoCalendarComponent extends ScoNgModelBase implements OnInit {
  @Input() label: string = '';
  @Input() defaultDate: Date = null;
  @Input() minDate: Date = null;
  @Input() maxDate: Date = null;
  @Input() disabled: boolean = false;
  @Input() readonlyInput: boolean = false;
  @Input() inline: boolean = false;
  @Input() inputStyleClass: string = '';
  @Input() dateFormat: string = 'dd/mm/yy';
  @Input() hourFormat: string = '24';
  @Input() showTime: boolean = false;
  @Input() timeOnly: boolean = false;
  @Input() stepHour: number = 1;
  @Input() stepMinute: number = 1;
  @Input() showButtonBar: boolean = false;
  @Input() selectionMode: string = this.constantsService.ScoCalendarConstants.SELECTION_SINGLE;
  @Input() inputId: string;
  @Input() name: string;
  @Input() language: string = this.constantsService.ScoCalendarConstants.LOCALE_ES; // es, en, etc.
  @Input() touchUI: boolean = false;
  @Input() placeholder: string = '';

  @Output() select: EventEmitter<Date>;
  @Output() close: EventEmitter<Date>;
  @Output() todayClick: EventEmitter<Date>;
  @Output() clearClick: EventEmitter<MouseEvent>;

  constructor(
    private readonly config: PrimeNGConfig,
    private readonly constantsService: ScoConstantsService,
  ) {
    super();
    this.value = new Date();
    this.select = new EventEmitter<Date>();
    this.close = new EventEmitter<Date>();
    this.todayClick = new EventEmitter<Date>();
    this.clearClick = new EventEmitter<MouseEvent>();
  }

  ngOnInit() {
    let locale;
    switch (this.language) {
      case this.constantsService.ScoCalendarConstants.LOCALE_ES:
        locale = {
          firstDayOfWeek: 1,
          dayNames: [
            'domingo',
            'lunes',
            'martes',
            'miércoles',
            'jueves',
            'viernes',
            'sábado',
          ],
          dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
          dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
          monthNames: [
            'enero',
            'febrero',
            'marzo',
            'abril',
            'mayo',
            'junio',
            'julio',
            'agosto',
            'septiembre',
            'octubre',
            'noviembre',
            'diciembre',
          ],
          monthNamesShort: [
            'ene',
            'feb',
            'mar',
            'abr',
            'may',
            'jun',
            'jul',
            'ago',
            'sep',
            'oct',
            'nov',
            'dic',
          ],
          today: 'Hoy',
          clear: 'Borrar',
        };
        break;
      case this.constantsService.ScoCalendarConstants.LOCALE_EN:
        locale = {
          firstDayOfWeek: 0,
          dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'mm/dd/yy',
          weekHeader: 'Wk',
        };
        break;
      default:
        locale = {
          firstDayOfWeek: 0,
          dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'mm/dd/yy',
          weekHeader: 'Wk',
        };
    }

    this.config.setTranslation(locale);
  }

  onSelect($event: Date) {
    this.select.emit($event);
  }

  onClose($event: Date) {
    this.close.emit($event);
  }

  onTodayClick($event: Date) {
    this.todayClick.emit($event);
  }

  onClearClick($event: MouseEvent) {
    this.clearClick.emit($event);
  }
}
