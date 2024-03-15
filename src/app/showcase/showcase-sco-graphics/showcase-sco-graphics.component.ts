import { Component, OnInit } from '@angular/core';
import { ScoToastService } from 'projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoCacheService } from 'projects/sco-angular-components/src/services/sco-cache.service';
import { ScoConstantsService } from 'projects/sco-angular-components/src/services/sco-constants.service';

@Component({
  selector: 'app-showcase-sco-graphics',
  templateUrl: './showcase-sco-graphics.component.html',
  styleUrls: ['./showcase-sco-graphics.component.scss']
})
export class ShowcaseScoGraphicsComponent implements OnInit {

  dataBar: any;
  dataLine: any;
  dataRadar: any;
  dataDoughnut: any;
  dataPie: any;

  constructor(
    private readonly cacheService: ScoCacheService,
    public readonly constantsService: ScoConstantsService,
    private readonly toastService: ScoToastService
  ) {
    this.cacheService.setElement('title', 'Graphics');
  }

  ngOnInit() {

    this.dataBar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
    };

    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
    }


    this.dataRadar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
    };

    this.dataDoughnut = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
  };
    
    this.dataPie = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
    };

  }

  selectDataBar($event){
    console.log($event);
    this.toastService.addSuccessMessage("Datos", JSON.stringify($event, this.getCircularReplacer()));
  }


  selectDataLine($event){
    console.log($event);
    this.toastService.addSuccessMessage("Datos", JSON.stringify($event, this.getCircularReplacer()));
  }

  selectDataRadar($event){
    console.log($event);
    this.toastService.addSuccessMessage("Datos", JSON.stringify($event, this.getCircularReplacer()));
  }

  selectDataDoughnut($event){
    console.log($event);
    this.toastService.addSuccessMessage("Datos", JSON.stringify($event, this.getCircularReplacer()));
  }

  selectDataPie($event){
    console.log($event);
    this.toastService.addSuccessMessage("Datos", JSON.stringify($event, this.getCircularReplacer()));
  }

  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
}