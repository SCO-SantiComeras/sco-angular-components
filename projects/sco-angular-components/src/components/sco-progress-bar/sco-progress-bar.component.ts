import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sco-progress-bar',
  templateUrl: './sco-progress-bar.component.html',
  styleUrls: ['./sco-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoProgressBarComponent {

  @Input() value: number;
  @Input() label: string;
  @Input() height: number = 16;
  @Input() striped: boolean;
  @Input() animated: boolean;

}
