import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(
    private _gifsService: GifsService
  ){}
  buscar(){
    //el valor del .value va ligado al tipado del elemento ElementRef que es un elemento
    //de entrada de HTML
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }

    this._gifsService.buscargGifs(valor);
    //seteamos el valor del input a un string vacio
    this.txtBuscar.nativeElement.value = '';
  }
}
