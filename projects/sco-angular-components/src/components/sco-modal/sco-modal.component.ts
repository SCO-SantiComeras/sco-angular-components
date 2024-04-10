import { ScoModalService } from './sco-modal.service';
import { ScoConstantsService } from '../../services/sco-constants.service';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'sco-modal',
  templateUrl: './sco-modal.component.html',
  styleUrls: ['./sco-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoModalComponent implements OnInit, OnDestroy, OnChanges {

  @Input() id: string;
  @Input() type: string = this.constantsService.ScoModalTypeConstants.INFO;
  @Input() labelConfirm: string;
  @Input() labelClose: string;
  @Input() forceClose: boolean = false;
  @Input() big: boolean = false;
  @Input() width: string = undefined;
  @Input() height: string = undefined;
  @Input() sizeUnity: string = this.constantsService.ScoModalTypeConstants.SIZE_UNITY_PIXELS;
  @Input() closeWhenConfirm: boolean = true;

  @Output() close: EventEmitter<MouseEvent>;
  @Output() accept: EventEmitter<MouseEvent>;

  public show: boolean;
  public firstTime: boolean;

  public top: string = undefined;
  public left: string = undefined;

  constructor(
    public readonly constantsService: ScoConstantsService,
    private readonly modalsService: ScoModalService
  ) { 
    this.close = new EventEmitter<MouseEvent>();
    this.accept = new EventEmitter<MouseEvent>();
    this.show = false;
    this.firstTime = true;
  }

  ngOnInit() {
    if (!this.id) {
      console.error("Modal must have a id");
      return;
    }

    this.modalsService.add(this);
    this.show = false;
    this.firstTime = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['sizeUnity']) {
        this.sizeUnity = changes['sizeUnity'].currentValue;
      }

      if (changes['width']) {
        this.width = changes['width'].currentValue;
        
        if (this.sizeUnity === this.constantsService.ScoModalTypeConstants.SIZE_UNITY_PIXELS) {     
          this.width = this.width + 'px';     
        } else if (this.sizeUnity === this.constantsService.ScoModalTypeConstants.SIZE_UNITY_PERCENTAGE) {
          /* Calcula el ancho en píxeles con el ancho de la ventana y el porcentaje actual de width, 
          concatena la cadena 'px' al resultado y lo asigna a this.width */
          this.width = window.innerWidth * (parseInt(changes['width'].currentValue) / 100) + 'px';
        }

        //centra ventana del navegador
        this.left = (window.innerWidth - parseInt(this.width)) / 2 + 'px';
      }
      
      if (changes['height']) {
        if (this.sizeUnity === this.constantsService.ScoModalTypeConstants.SIZE_UNITY_PIXELS) {
          this.height = this.height + 'px';
        } else if (this.sizeUnity === this.constantsService.ScoModalTypeConstants.SIZE_UNITY_PERCENTAGE) {
          /* Calcula el largo en píxeles con el largo de la ventana  y el porcentaje actual de height, 
          concatena la cadena 'px' al resultado y lo asigna a this.height */
          this.height = window.innerHeight * (parseInt(changes['height'].currentValue) / 100) + 'px';
        }

        this.top = (window.innerHeight - parseInt(this.height)) / 2 + 'px';
      }
    }
  }

  onConfirm($event: MouseEvent) {
    this.accept.emit($event);

    if (this.closeWhenConfirm) {
      this.modalsService.close(this.id);
    }
  }

  onClose($event: MouseEvent) {
    this.close.emit($event);
    this.modalsService.close(this.id);
  }

  onClickOutside($event: MouseEvent) {
   this.close.emit($event);
   this.modalsService.close(this.id);
  }

  ngOnDestroy(): void {
    this.modalsService.remove(this.id);
  }
}
