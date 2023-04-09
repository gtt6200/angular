import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit{

  heroe: Heroe[] = [];

  constructor(private _heroesService: HeroesService){}

  ngOnInit(): void {
    this._heroesService.getHeroes()
    .subscribe(
      heroe => {
        this.heroe = heroe
      }
    );
    
  }
}
