import { Injectable } from '@angular/core';
import { ScoConstantsService } from '../sco-constants.service';

@Injectable({
  providedIn: 'root'
})

export class ScoResolutionService {

  private _size: string;

  public get size(): string {
    this.setSize();
    return this._size;
  }

  public set size(value: string) {
    this._size = value;
  }

  constructor(private readonly constantsService: ScoConstantsService) { }

  setSize(width: number = undefined): string {
    if (width == undefined) {
      width = window.innerWidth;
    }

    this._size = this.constantsService.ScoResolutionConstants.WEB;

    if (width >= this.constantsService.ScoResolutionConstants.MOBILE_MIN &&
        width < this.constantsService.ScoResolutionConstants.MOBILE_MAX) {
          this._size = this.constantsService.ScoResolutionConstants.MOBILE;
    } else if (width >= this.constantsService.ScoResolutionConstants.TABLET_MIN &&
        width < this.constantsService.ScoResolutionConstants.TABLET_MAX) {
          this._size = this.constantsService.ScoResolutionConstants.TABLET;
    } else if (width >= this.constantsService.ScoResolutionConstants.WEB_MIN &&
        width < this.constantsService.ScoResolutionConstants.WEB_MAX) {
          this._size = this.constantsService.ScoResolutionConstants.WEB;
    }

    return this._size;
  }
}
