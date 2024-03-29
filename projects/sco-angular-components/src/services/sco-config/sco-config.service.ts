import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { has, get, cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})

export class ScoConfigService {

  private _data: any;

  constructor(private readonly http: HttpClient) {}
  
  getDataFromJson(pathJSON: string) {
    return new Promise((resolve, reject) => {
      this.http.get(pathJSON).subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.error("SCO-CONFIG: " + error);
        reject(true);
      })
    });
  }

  getData(path: string) {
    if (has(this._data, path)) {
      return get(this._data, path);
    }

    console.error("Not exists path: " + path)
    return null;
  }

  getAllData() {
    return cloneDeep(this._data);
  }
}
