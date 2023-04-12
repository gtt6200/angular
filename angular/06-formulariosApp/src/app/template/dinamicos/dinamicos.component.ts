import { Component, OnInit } from '@angular/core';
interface Persona {
  nombre : string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''
  persona: Persona = {
    nombre: 'yuniel',
    favoritos: [
      {id: 1, nombre: 'Mario Bross'},
      {id: 2, nombre: 'Soccer League'},
      {id: 3, nombre: 'Sonic'},
      {id: 4, nombre: 'Browser'}
    ]
  }

  guardar(){
    console.log('jala');
  }
  eliminar(id:number){
    this.persona.favoritos.splice(id, 1);
  }
  agregar(){
    const nuevofav: Favorito = {
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevofav});
    this.nuevoJuego='';
  }
}
