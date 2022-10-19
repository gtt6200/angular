import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes : string[] = ['Spiderman', 'She Hulk', 'Ironman', 'Naruto'];
  hb: string = '';
  borrarHeroe(){
    const hBorrado = this.heroes.shift() || '';
    this.hb = hBorrado;
     return hBorrado;
  }
}
