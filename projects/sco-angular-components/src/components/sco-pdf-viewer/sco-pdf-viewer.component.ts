import { ScoConstantsService } from 'projects/sco-angular-components/src/public-api';
import { ScoSpinnerService } from './../sco-spinner/sco-spinner.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ScoPdfViewer } from './model/sco-pdf-viewer';
import { Location } from '@angular/common';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'sco-pdf-viewer',
  templateUrl: './sco-pdf-viewer.component.html',
  styleUrls: ['./sco-pdf-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoPdfViewerComponent implements OnInit, OnChanges {

  @Input() headerPosition: string = this.constantsService.ScoPdfViewerConstants.HEADER_POSITION_LEFT;
  @Input() headerPaddingBottom: number = 10;

  @Input() showComebackButton: boolean = true;
  @Input() comebackButtonIcon: string = 'fa fa-arrow-left';
  @Input() comebackButtonTransparent: boolean = true;

  @Input() showDownloadButton: boolean = true;
  @Input() downloadButtonIcon: string = 'fa fa-download';
  @Input() downloadButtonTransparent: boolean = true;

  @Input() scoPdfViewer: ScoPdfViewer;
  @Input() viewerHeight: string = '80vh';
  @Input() viewerWidth: string = '100vw'

  @Input() showZoomButtons: boolean = true;
  @Input() plusZoomButtonIcon: string = 'fa fa-plus';
  @Input() plusZoomButtonTransparent: boolean = true;
  @Input() minusZoomButtonIcon: string = 'fa fa-minus';
  @Input() minusZoomButtonTransparent: boolean = true;
  @Input() restoreZoomButtonIcon: string = 'fa fa-refresh';
  @Input() restoreZoomButtonTransparent: boolean = true;

  @Input() showTotalPages: boolean = true;
  @Input() totalPagesOnRightSide: boolean = true;
  @Input() labelTotalPages: string = 'Páginas';

  @Output() onGoBack: EventEmitter<void>;
  @Output() onDownload: EventEmitter<boolean>;
  @Output() onLoad: EventEmitter<boolean>;

  public pdfSrc: string | Uint8Array;
	public pdfZoom: number = this.constantsService.ScoPdfViewerConstants.DEFAULT_ZOOM;
	public totalPages: number;

  public _showPdfViewer: ScoPdfViewer;

  constructor(
    public readonly constantsService: ScoConstantsService,
    private readonly locationService: Location,
    private readonly spinnerService: ScoSpinnerService,
  ) {
    this.onGoBack = new EventEmitter<void>();
    this.onDownload = new EventEmitter<boolean>();
    this.onLoad = new EventEmitter<boolean>();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (!changes) return;

    if (changes["scoPdfViewer"] && changes["scoPdfViewer"].currentValue) {
      this._showPdfViewer = changes["scoPdfViewer"].currentValue;
      this.validatePdfViewerValues();
      await this.processPdf();
    }
  }

  /* Component Functions */
  async ngOnInit() {
    this.spinnerService.showSpinner();

    if (!this.scoPdfViewer) {
      this.spinnerService.hideSpinner();
      this.onGoBack.emit();
      return;
    }

    if (!this.scoPdfViewer.pdfSrc) {
      this.spinnerService.hideSpinner();
      this.onGoBack.emit();
      return;
    }

    this.validatePdfViewerValues();
    await this.processPdf(this.scoPdfViewer);
  }

  async processPdf(ScoPdfViewer: ScoPdfViewer = undefined) {
    if (ScoPdfViewer) {
      this._showPdfViewer = ScoPdfViewer;
    }

    // Conver Input url (Public internet pdf url or local pdf url) to base64 code
    if (this._showPdfViewer.isBase64) { 
      await this.printPdf();
      return;
    }

    const file: File = await fetch(this.scoPdfViewer.pdfSrc)
      .then(r => r.blob())
      .then(blobFile => new File([blobFile], this._showPdfViewer.fileName, { type: "application/pdf" }));

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      this._showPdfViewer.pdfSrc = reader.result.toString().split("base64,")[1];
      await this.printPdf();
    };
  }

	async callBackFn(pdf: PDFDocumentProxy) {
		this.totalPages = pdf.numPages;
    this.onLoad.emit(true);
    this.spinnerService.hideSpinner();
	}

  /* Comeback Function */
  public onClickComeBackBtn() {
    this.locationService.back();
  }

  /* PDF Functions */
  async printPdf() {
    if (!this._showPdfViewer || (this._showPdfViewer && !this._showPdfViewer.pdfSrc)) {
      return;
    }
    
    const byteArray: Uint8Array = new Uint8Array(
      atob(this._showPdfViewer.pdfSrc)
        .split("")
        .map(char => char.charCodeAt(0))
    );

    const file: Blob = new Blob([byteArray], { type: "application/pdf" });
    const fileURL: string = URL.createObjectURL(file);

    this.pdfSrc = fileURL;
  }

  async onClickDownloadBtn() {
    try {
      const byteArray: Uint8Array = new Uint8Array(
        atob(this._showPdfViewer.pdfSrc)
          .split("")
          .map(char => char.charCodeAt(0))
      );

      const file: Blob = new Blob([byteArray], { type: "application/pdf" });
      const fileURL: string = URL.createObjectURL(file);
  
      // Construct the 'a' element
      const link: HTMLAnchorElement  = document.createElement("a");
      link.download = `${this._showPdfViewer.fileName}`;
      link.target = "_blank";
  
      // Construct the URI
      link.href = fileURL;
      document.body.appendChild(link);
      link.click();
  
      // Cleanup the DOM
      document.body.removeChild(link);

      // Report result to user
      this.onDownload.emit(true);
    } catch (err) {
      this.onDownload.emit(false);
    }
  }

  /* PdfViewer Component Functions */
  public zoomIn() {
    this.pdfZoom += this.constantsService.ScoPdfViewerConstants.ZOOM_STEP;
  }
 
  public zoomOut() {
    if (this.pdfZoom > (this.constantsService.ScoPdfViewerConstants.DEFAULT_ZOOM/2)) {
      this.pdfZoom -= this.constantsService.ScoPdfViewerConstants.ZOOM_STEP;
    }
  }
 
  public resetZoom() {
    this.pdfZoom = this.constantsService.ScoPdfViewerConstants.DEFAULT_ZOOM;
  }

  private validatePdfViewerValues() {
    if (!this.scoPdfViewer.fileName) {
      this.scoPdfViewer.fileName = this.constantsService.ScoPdfViewerConstants.DEFAULT_FILE_NAME;
    } 
    
    if (this.scoPdfViewer.showTotalPages == undefined) {
      this.scoPdfViewer.showTotalPages = true;
    }

    if (this.scoPdfViewer.canDownload == undefined) {
      this.scoPdfViewer.canDownload = true;
    }

    if (this.scoPdfViewer.isBase64 == undefined) {
      this.scoPdfViewer.isBase64 = false;
    }
  }
}