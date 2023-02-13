import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  constructor(
    private _gifService : GifsService
  ) { }
  
    get resultados(){
      return [...this._gifService.resultados];
    }

}
