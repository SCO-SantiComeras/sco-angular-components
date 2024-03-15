import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScoTableService {

  private _id: number = 1;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  nextId(){
    return ++this._id;
  }
}
