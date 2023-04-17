import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 2
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ 'ene-abr 2023', 'may-ago 2023', 'sep-dec 2023', 'ene-abr 2024', 'may-ago 2024', 'sep-dec 2024' ],
    datasets: [
      { data: [ 10, 10, 10, 10, 10, 10 ], label: 'Hombres' },
      { data: [ 10, 10, 10, 10, 10, 10 ], label: 'Mujeres' },
      { data: [ 10, 10, 10, 10, 10, 10 ], label: 'Ambos' }
    ]
  };
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }


  constructor() { }

  ngOnInit(): void {
  }
  // randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //   ];

  //   this.chart?.update();
  // }
  public randomize(): void {
    this.barChartData.datasets.forEach((item) => {
      item.data.map((valor, indice) => {
        item.data[indice] = Math.round(Math.random() * 10);
      });
    });
 
    this.chart?.update();
  }
}
