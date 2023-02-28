import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = [  'EU', 'EFTA', 'CARICOM', 'PA',  'AU',  'USAN', 'EEU', 'AL', 'ASEAN',  'CAIS',  'CEFTA',  'NAFTA',  'SAARC', 
];
  regionActiva: string = '';
  paises: Country[] = [];


  constructor(
    private _paisService : PaisService
  ) { }

  getClaseCSS(region : string): string{
    return (region === this.regionActiva) ? 'btn btn-success': 'btn btn-outline-success';
  }

  activarRegion (region:string){
    this.regionActiva = region;
    this._paisService.buscarRegion(region).subscribe(
      (resp)=>{
        this.paises = resp;
      }, (err)=>{
        this.paises = [];
      }
    );
  }
}
