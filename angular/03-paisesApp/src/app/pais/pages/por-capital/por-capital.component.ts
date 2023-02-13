import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino : string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(
    private _paisService : PaisService
  ) { }

  buscar(terminoRecibido:string){
    this.hayError=false;
    this.termino = terminoRecibido;
    
    this._paisService.buscarCapital(terminoRecibido)
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
