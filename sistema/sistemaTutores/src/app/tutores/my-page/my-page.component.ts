import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product, InventoryStatus } from 'src/app/layout/api/product';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from 'src/app/services/productservice';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styles: [
  ]
})
export class MyPageComponent {
  items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => {
          this.products = data.map(report => {
            return {
              id: report.id,
              name: report.name,
              category: report.category,
              inventoryStatus: {
                label: report.inventoryStatus || '',
                value: report.inventoryStatus || ''
              }
            };
          });
        });

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Hombres',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--blue-700'),
                    borderColor: documentStyle.getPropertyValue('--blue-700'),
                    tension: .4
                },
                {
                    label: 'Mujeres',
                    data: [68, 48, 40, 79, 86, 37, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--pink-300'),
                    borderColor: documentStyle.getPropertyValue('--pink-300'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
