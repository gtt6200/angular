import { Component} from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  listarPersonajes: Personaje []=[
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
nuevo : Personaje = {
  nombre: 'Jiraiya',
  poder: 1000
}
  agregarNuevoPersonaje(argumento : Personaje){
    this.listarPersonajes.push(argumento);
  }
  constructor( private NarutoService : NarutoService){}
}
