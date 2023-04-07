import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent{

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'wonder woman',
      vuela: true,
      color: Color.rojo
    },
  ]
  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }
  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    console.log(valor);
    
  }
}
