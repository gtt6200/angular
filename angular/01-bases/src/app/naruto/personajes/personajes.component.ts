import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  // @Input('data') listarPersonajes: Personaje[]=[];

  get personajes(){
    return this.narutoService.personajes;
  }

  constructor(private narutoService : NarutoService){

  }
}
