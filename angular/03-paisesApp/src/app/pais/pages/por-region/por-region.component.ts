import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = [  'EU', 'EFTA', 'CARICOM', 'PA',  'AU',  'USAN', 'EEU', 'AL', 'ASEAN',  'CAIS',  'CEFTA',  'NAFTA',  'SAARC', 
];
  regionActiva: string = '';



  constructor() { }

  getClaseCSS(region : string): string{
    return (region === this.regionActiva) ? 'btn btn-success': 'btn btn-outline-success';
  }

  activarRegion (region:string){
    this.regionActiva = region;
    console.log(region);
    
  }

}
