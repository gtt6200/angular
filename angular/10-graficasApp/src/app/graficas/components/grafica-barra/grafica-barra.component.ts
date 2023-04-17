import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() pie: boolean = false;

  @Input() barChartOptions: ChartConfiguration['options'] = {
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



  @Input() barChartData: ChartData<'line'> = {
    labels: [ 'ene-abr 2023', 'may-ago 2023', 'sep-dec 2023'],
    datasets: [
      { data: [ 9, 10, 4 ], label: 'Hombres' },
      { data: [ 10, 5, 10 ], label: 'Mujeres' }
    ]
  };
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }


  constructor() { }

  ngOnInit(): void {
    if (this.pie) {
      this.barChartType = 'line';
    }
    
  }

  public randomize(): void {
    this.barChartData.datasets.forEach((item) => {
      item.data.map((valor, indice) => {
        item.data[indice] = Math.round(Math.random() * 10);
      });
    });
 
    this.chart?.update();
  }
}

