import { Injectable } from '@angular/core';
import { ScoToast } from './model/sco-toast';
import { ScoConstantsService } from '../../services/sco-constants.service';

@Injectable({
  providedIn: 'root'
})

export class ScoToastService {

  private _toasts: ScoToast[];
  private _timeout: number;

  public get toasts(): ScoToast[] {
    return this._toasts;
  }

  public get timeout(): number {
    return this._timeout;
  }

  public set timeout(value: number){
    this._timeout = value;
  }

  constructor(private readonly constantsService: ScoConstantsService) {
    this._toasts = [];
    this._timeout = this.constantsService.ScoToastConstants.TIMEOUT;
  }

  addInfoMessage(tittle: string, message: string) {
    this.addMessage(tittle, message, this.constantsService.ScoToastConstants.TYPE_INFO);
  }
  
  addWarningMessage(tittle: string, message: string) {
    this.addMessage(tittle, message, this.constantsService.ScoToastConstants.TYPE_WARNING);
  }

  addErrorMessage(tittle: string, message: string) {
    this.addMessage(tittle, message, this.constantsService.ScoToastConstants.TYPE_ERROR);
  }

  addSuccessMessage(tittle: string, message: string) {
    this.addMessage(tittle, message, this.constantsService.ScoToastConstants.TYPE_SUCCESS);
  }

  closeToast(toast: ScoToast) {
    let index: number = this._toasts.findIndex(t => t === toast);
    if (index != -1) {
      this._toasts.splice(index, 1);
    }
  }

  private addMessage(tittle: string, message: string, type: string) {
    let toast = new ScoToast(tittle, message, type);

    if (this._toasts.length < this.constantsService.ScoToastConstants.MAX_TOAST) {
      this._toasts.push(toast);
    } else {
      this._toasts = this._toasts.slice(1, this._toasts.length);
      this._toasts.push(toast);
    }

    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeout);
  } 
}
