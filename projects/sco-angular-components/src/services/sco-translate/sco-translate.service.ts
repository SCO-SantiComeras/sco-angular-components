import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoTranslateService {

  private _data: any;

  constructor(private http: HttpClient) { }

  public getData(path: string) {
    return new Promise((resolve, reject) => {

      let language: string = navigator.language;
      if (navigator.language.includes('-')) {
        language = navigator.language.split('-')[0];
      }

      if (!language || (language != "en" && language != "es")) {
        language = "en";
      }

      this.http.get(path+language+'.json').subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.log("Error to get translations: ", error);
        reject(true);
      });
    });
  }

  public getTranslate(word: string) {
    return this._data[word];
  }

}
