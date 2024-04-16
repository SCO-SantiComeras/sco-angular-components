import { ScoConstantsService } from '../../services/sco-constants.service';
import { Injectable } from '@angular/core';
import { ScoPdfViewer } from './model/sco-pdf-viewer';

@Injectable({
  providedIn: 'root'
})
export class ScoPdfViewerService {

  private _show: boolean;
  private _scoPdfViewer: ScoPdfViewer;

  constructor(private readonly constantsService: ScoConstantsService) { 
    this._show = false;
    this._scoPdfViewer = undefined;
  }

  public showPdf(): void {
    this._show = true;
  }

  public hidePdf(): void {
    this._show = false;
  }

  public show(): boolean {
    return this._show;
  }

  public loadPdf(scoPdfViewer: ScoPdfViewer) {
    if (this.show) {
      this.hidePdf();
    }

    this._scoPdfViewer = this.validatePdfViewerValues(scoPdfViewer);
    this.showPdf();
  }

  public unLoadPdf(): void {
    this._scoPdfViewer = undefined;
    this.hidePdf();
  }

  public scoPdfViewer(): ScoPdfViewer {
    return this._scoPdfViewer;
  }

  private validatePdfViewerValues(scoPdfViewer: ScoPdfViewer): ScoPdfViewer {
    if (!scoPdfViewer.fileName) {
      scoPdfViewer.fileName = this.constantsService.ScoPdfViewerConstants.DEFAULT_FILE_NAME;
    } 
    
    if (scoPdfViewer.showTotalPages == undefined) {
      scoPdfViewer.showTotalPages = true;
    }

    if (scoPdfViewer.canDownload == undefined) {
      scoPdfViewer.canDownload = true;
    }

    if (scoPdfViewer.isBase64 == undefined) {
      scoPdfViewer.isBase64 = false;
    }

    return scoPdfViewer;
  }
}
