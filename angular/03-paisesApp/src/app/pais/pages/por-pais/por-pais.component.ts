import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises : Country[] = [];
  constructor(
    private _paisService : PaisService
  ) { }
  buscar(terminoRecibido:string){
    this.hayError=false;
    this.termino = terminoRecibido;
    this._paisService.buscarPais(terminoRecibido)
    .subscribe(
      (resp)=>{
        console.log(resp);
        this.paises = resp;
      }, (err)=>{
        this.hayError= true;
        this.paises = [];
      }
    );
  }

}
