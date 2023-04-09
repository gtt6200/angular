import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius: 5px;
    }
  
  `
  ]
})
export class HeroeComponent implements OnInit{

  heroe !: Heroe;

  constructor(
      private _activatedRoute : ActivatedRoute,
      private _heroesService : HeroesService,
      private _router : Router
  ){}

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(
      switchMap( ({id}) => this._heroesService.getHeroePorId(id))
      ,tap(console.log)
      )
    .subscribe(id => this.heroe = id)
  }


  regresar(){
    this._router.navigate(['/heroes/listado'])
  }

}
