import { Injectable } from '@angular/core';
import { ScoModalComponent } from './sco-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ScoModalService {

  private modals: ScoModalComponent[];

  constructor() {
    this.modals = [];
  }

  add(modal: ScoModalComponent) {
    if (!this.modals.find(m => m.id === modal.id)) {
      this.modals.push(modal);
    }
  }

  remove(id: string) {
    this.modals = this.modals.filter(m => m.id != id);
  }

  open(id: string) {
    const modal = this.modals.find(m => m.id === id);
    if (!modal) {
      console.log("Modal not exists");
      return;
    }

    modal.show = true;
  }

  close(id: string) {
    const modal = this.modals.find(m => m.id === id);
    if (!modal) {
      console.log("Modal not exists");
      return;
    }

    modal.show = false;
  }
}
