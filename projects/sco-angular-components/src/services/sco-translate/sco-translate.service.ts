import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScoConstantsService } from '../sco-constants.service';

@Injectable({
  providedIn: 'root'
})
export class ScoTranslateService {

  private _data: any;
  private _language: string;

  constructor(
    private readonly http: HttpClient,
    private readonly constantsService: ScoConstantsService,
  ) {
    this.setLanguage();
  }

  public getLanguage(): string {
    return this._language;
  }

  public getData(path: string) {
    return new Promise((resolve, reject) => {
      let language: string = this.setLanguage();

      this.http.get(`${path}${language}.json`).subscribe({
        next: (data) => {
          this._data = data;
          resolve(true);
        },
        error: (error) => {
          reject(true);
        }
      })
    });
  }

  public getTranslate(word: string) {
    return this._data[word];
  }

  private setLanguage(): string {
    let language: string = navigator.language;

    if (navigator.language.includes('-')) {
      language = navigator.language.split('-')[0];
    }

    if (!language) {
      language = this.constantsService.ScoTranslateConstants.DEFAULT_LANGUAGE;
    }

    const languages: string[] = Object.values(this.constantsService.ScoTranslateConstants.LANGUAGES);
    if (!languages || (languages && languages.length == 0)) {
      language = this.constantsService.ScoTranslateConstants.DEFAULT_LANGUAGE;
    } else {
      const existLanguage: string = languages.find(l => l == language);
      if (!existLanguage) {
        language = this.constantsService.ScoTranslateConstants.DEFAULT_LANGUAGE;
      }
    }

    this._language = language;
    return this._language
  }
}
