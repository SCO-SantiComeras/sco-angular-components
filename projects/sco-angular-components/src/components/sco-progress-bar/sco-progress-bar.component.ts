import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-progress-bar',
  templateUrl: './sco-progress-bar.component.html',
  styleUrls: ['./sco-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoProgressBarComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Input() label: string;
  @Input() height: number = 16;
  @Input() striped: boolean;
  @Input() animated: boolean;

  @Output() loaded: EventEmitter<boolean>;

  private _load: boolean;

  constructor() {
    this.loaded = new EventEmitter<boolean>();

    this._load = false;
  }

  ngOnInit(): void {
    this._load = true;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !this._load) return;

    if (changes["value"].currentValue == 100) {
      this.emitProgressBarLoaded();
    }
  }

  private emitProgressBarLoaded() {
    this.loaded.emit(true);
  }
}
