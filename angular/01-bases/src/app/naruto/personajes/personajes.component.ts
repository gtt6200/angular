import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  @Input('data') listarPersonajes: Personaje[]=[]
}
