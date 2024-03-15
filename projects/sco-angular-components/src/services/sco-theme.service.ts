import { Injectable } from '@angular/core';
import { ScoConstantsService } from './sco-constants.service';

@Injectable({
  providedIn: 'root'
})

export class ScoThemeService {

  private _theme: string;

  public get theme(): string {
    return this._theme;
  }

  private themesAvailables: string [] = [
    this.constantsService.ScoThemeConstants.THEME_DEFAULT,
    this.constantsService.ScoThemeConstants.THEME_DARK,
    this.constantsService.ScoThemeConstants.THEME_BLUE,
  ];

  constructor(private constantsService: ScoConstantsService) { 
    this._theme = this.constantsService.ScoThemeConstants.THEME_DEFAULT;
  }

  changeTheme(theme: string) {
    if (this.themesAvailables.find(t => t === theme)) {
      this._theme = theme;
      return;
    }

    console.error("Theme " + theme + " not exists")
  }
}