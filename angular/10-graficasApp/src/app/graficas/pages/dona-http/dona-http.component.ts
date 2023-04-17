import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
    // Doughnut
    // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartLabels: string[] = [];
    public doughnutChartValues: number[] = [];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.doughnutChartValues,
          backgroundColor: ['#6405F0','#0724E3', '#05A0F0']
        },
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

  constructor( private _graficasService: GraficasService) { }

  ngOnInit(): void {

  // this._graficasService.getUsuariosRedes()
  //   .subscribe( data => {
  //     const labels = Object.keys(data);
  //     const values = Object.values(data);
  //     console.log(labels, 'jalo');
  //     console.log(values, 'jalo');
  //     this.doughnutChartLabels = labels;
  //     this.doughnutChartData = {
  //       labels: labels,
  //       datasets:[
  //         {
  //           data: values
  //         }
  //       ]
  //     } 
  //   });
  this._graficasService.getDonaData()
    .subscribe( ({labels, values}) => {
      this.doughnutChartLabels= labels;
      this.doughnutChartData = {
              labels: labels,
              datasets:[
                {
                  data: values
                }
              ]
            } 
    });

  }
  

}
