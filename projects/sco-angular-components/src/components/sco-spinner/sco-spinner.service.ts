import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScoSpinnerService {

  private _show: boolean;

  constructor() { }

  public get show(): boolean {
    return this._show;
  }

  showSpinner(): void {
    this._show = true;
  }

  hideSpinner(delay: number = undefined): void {
    if (delay == undefined || delay <= 0) {
      this._show = false;
      return;
    }

    setTimeout(() => {
      this._show = false;
    }, delay);
  }
}
