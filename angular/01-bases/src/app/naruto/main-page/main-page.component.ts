import { Component, OnInit } from '@angular/core';

interface personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  listarPersonajes: personaje []=[
    {
      nombre: 'Naruto',
      poder: 17000
    },{
      nombre: 'Sasuke',
      poder: 15000
    },{
      nombre: 'Sakura',
      poder:500
    }
  ]
  nuevo : personaje = {
    nombre: '',
    poder: 0,
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.listarPersonajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
  
}
