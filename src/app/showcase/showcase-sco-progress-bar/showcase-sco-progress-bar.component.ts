import { Component } from '@angular/core';
import { ScoCacheService } from 'projects/sco-components-lib/src/services/sco-cache.service';

@Component({
  selector: 'app-showcase-sco-progress-bar',
  templateUrl: './showcase-sco-progress-bar.component.html',
  styleUrls: ['./showcase-sco-progress-bar.component.scss']
})
export class ShowcaseScoProgressBarComponent {

  public valueEx1 = 0;
  public valueEx2 = 0;
  public valueEx3 = 0;
  public valueEx4 = 0;
  public valueEx5 = 0;

  constructor(
    private readonly cacheService: ScoCacheService,
  ) { 
    this.cacheService.setElement('title', 'Progress toastService');
  }

  increaseEx1(){
    if(this.valueEx1 + 10 > 100){
      this.valueEx1 = 100;
    }else{
      this.valueEx1 = this.valueEx1 + 10;
    }
  }

  decreaseEx1(){
    if(this.valueEx1 - 10 > 100){
      this.valueEx1 = 100;
    }else{
      this.valueEx1 = this.valueEx1 - 10;
    }
  }

  increaseEx2(){
    if(this.valueEx2 + 10 > 100){
      this.valueEx2 = 100;
    }else{
      this.valueEx2 = this.valueEx2 + 10;
    }
  }

  decreaseEx2(){
    if(this.valueEx2 - 10 > 100){
      this.valueEx2 = 100;
    }else{
      this.valueEx2 = this.valueEx2 - 10;
    }
  }

  increaseEx3(){
    if(this.valueEx3 + 10 > 100){
      this.valueEx3 = 100;
    }else{
      this.valueEx3 = this.valueEx3 + 10;
    }
  }

  decreaseEx3(){
    if(this.valueEx3 - 10 > 100){
      this.valueEx3 = 100;
    }else{
      this.valueEx3 = this.valueEx3 - 10;
    }
  }

  increaseEx4(){
    if(this.valueEx4 + 10 > 100){
      this.valueEx4 = 100;
    }else{
      this.valueEx4 = this.valueEx4 + 10;
    }
  }

  decreaseEx4(){
    if(this.valueEx4 - 10 > 100){
      this.valueEx4 = 100;
    }else{
      this.valueEx4 = this.valueEx4 - 10;
    }
  }

  increaseEx5(){
    if(this.valueEx5 + 10 > 100){
      this.valueEx5 = 100;
    }else{
      this.valueEx5 = this.valueEx5 + 10;
    }
  }

  decreaseEx5(){
    if(this.valueEx5 - 10 > 100){
      this.valueEx5 = 100;
    }else{
      this.valueEx5 = this.valueEx5 - 10;
    }
  }

}
