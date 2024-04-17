import { ScoConstantsService } from '../../services/sco-constants.service';
import { Component, forwardRef, Input, OnInit, Output, ViewEncapsulation, EventEmitter, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScoNgModelBase } from '../sco-ng-model-base/sco-ng-model-base.component';

@Component({
  selector: 'sco-file-uploader',
  templateUrl: './sco-file-uploader.component.html',
  styleUrls: ['./sco-file-uploader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScoFileUploaderComponent),
      multi: true
    }
  ]
})
export class ScoFileUploaderComponent extends ScoNgModelBase implements OnInit {

  @Input() label: string = 'Seleccione imagen';
  @Input() showLabel: boolean = false;
  @Input() required: boolean = false;

  @Input() showBorder: boolean = false;
  @Input() colorBorder: string = '#000';

  @Input() labelUploadBtn: string = 'Subir';
  @Input() showUploadBtn: boolean = true;

  @Input() labelCleanBtn: string = 'Limpiar';
  @Input() showCleanBtn: boolean = true;

  @Input() base64: boolean = false;
  @Input() labelBase64Title: string = 'Base64';
  @Input() base64TextRows: number = 4;


  @Output() selectFiles: EventEmitter<File[]>;
  @Output() uploadBtn: EventEmitter<File[]>;
  @Output() cleanBtn: EventEmitter<boolean>;
  @Output() copyBtn: EventEmitter<string[]>;

  public filesToUpload: File[];
  public fileReader: FileReader;

  public fileBase64: string;

  constructor(public constantsService: ScoConstantsService) {
    super();
    
    this.selectFiles = new EventEmitter<File[]>();
    this.uploadBtn = new EventEmitter<File[]>();
    this.cleanBtn = new EventEmitter<boolean>();
    this.copyBtn = new EventEmitter<string[]>();

    this.filesToUpload = [];
    this.fileReader = null;
    this.fileBase64 = '';
   }

  ngOnInit(): void {
    
  }

  async onChangeFileInput(files: FileList) {
    try {
      // File to post
      this.filesToUpload = [];

      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          this.filesToUpload.push(files.item(i));
        }
      }

      const emitFiles: File[] = this.filesToUpload;
      if (!this.showUploadBtn) {
        this.onClickCleanBtn(false);
      }
 
      if (emitFiles.length > 0) {
        this.selectFiles.emit(emitFiles);
      }

      if (this.base64 && emitFiles && emitFiles[0]) {
        // Get reader
        this.fileReader = new FileReader();
        this.fileReader.readAsDataURL(emitFiles[0]);

        // On load fil reader
        this.fileReader.onload = () => {
          // Get base64
          this.fileBase64 = this.fileReader.result.toString().split("base64,")[1];
        };
      }
    } catch (err) {

    }
  }

  onClickCleanBtn(emit: boolean = true) {
    this.filesToUpload = [];
    this.fileReader = null;
    this.fileBase64 = '';

    const inputFile: any = document.getElementById("file");
    inputFile.value = null;

    if (emit) {
      this.cleanBtn.emit(true);
    }
  }

  onClickUploadBtn() {
    this.uploadBtn.emit(this.filesToUpload);
  }

  onCLickCopyResultBtn(value: string, editor: string){
    try {
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = value.toString();

      document.body.appendChild(selBox);

      selBox.focus();
      selBox.select();

      document.execCommand('copy');
      document.body.removeChild(selBox);

      this.copyBtn.emit([editor, value]);
    } catch (err) {
      this.copyBtn.emit(null);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClickEvent(event) {
    try {
      // Check if there is path to get id
      if (!event.path){
        return;
      }

      // Get Path id and check it
      const id: string = event.path[0].id;
      if (!id) {
        return;
      }

      // Click on input file
      if (id == 'file') {
        if (this.fileBase64) {
          // Reset input file value and editors
          const inputFile: any = document.getElementById("file");
          inputFile.value = null;

          this.fileBase64 = '';
        }
      }
    } catch (err) {

    }
  }
}
