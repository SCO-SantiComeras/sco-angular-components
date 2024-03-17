import { ScoTranslateService } from '../../../../projects/sco-angular-components/src/services/sco-translate/sco-translate.service';
import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-file-uploader',
  templateUrl: './showcase-sco-file-uploader.component.html',
  styleUrls: ['./showcase-sco-file-uploader.component.scss']
})
export class ShowcaseScoFileUploaderComponent implements OnInit {

  public openAccordionOptions: boolean;

  public showFileUploader: boolean;

  public showLabel: boolean;
  public required: boolean;
  public label: string;
  public showBorder: boolean;
  public borderColor: string;
  public showUploadBtn: boolean;
  public labelUploadBtn: string;
  public showCleanBtn: boolean;
  public labelCleanBtn: string;
  public base64: boolean;
  public labelBase64Title: string;
  public base64TextRows: number;

  constructor(
    private readonly toastService: ScoToastService,
    private readonly cacheService: ScoCacheService,
    public readonly translateService: ScoTranslateService,
  ) { 
    this.cacheService.setElement("title", "File Uploader");

    this.openAccordionOptions = true;

    this.showFileUploader = false;

    this.showLabel = false;
    this.required = false;
    this.label = 'File uploader'
    this.showBorder = false;
    this.borderColor = '#000';
    this.showUploadBtn = true;
    this.labelUploadBtn = 'Subir';
    this.showCleanBtn = true;
    this.labelCleanBtn = 'Limpiar';
    this.base64 = false;
    this.labelBase64Title = 'Base64';
    this.base64TextRows = 4;
  }

  ngOnInit() {
    this.openAccordionOptions = true;

    this.showFileUploader = false;

    this.showBorder = false;
    this.borderColor = '#000';
    this.showUploadBtn = true;
    this.labelUploadBtn = 'Subir';
    this.showCleanBtn = true;
    this.labelCleanBtn = 'Limpiar';
    this.base64 = false;
    this.labelBase64Title = 'Base64';
    this.base64TextRows = 4;
  }

  onCLickAccordionOptions() {
    this.openAccordionOptions = !this.openAccordionOptions;
  }

  openFileUploader() {
    this.showFileUploader = true;
  }

  /* Component Functions */
  uploadBtn($event) {
    this.toastService.addSuccessMessage(
      "Success",
      `Botón subir pulsado: ${JSON.stringify($event ? $event.name : null)}`
    );
  }

  cleanBtn($event) {
    this.toastService.addSuccessMessage(
      "Success",
      "Botón limpiar pulsado"
    );
  }

  copyBtn($event) {
    this.toastService.addSuccessMessage(
      "Success",
      `Botón copiar pulsado: ${$event[0]} - ${$event[1]}`
    );
  }
}
