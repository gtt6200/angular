import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translations } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  traduccion : string[] = [];
  constructor( 
    private _activatedRoute : ActivatedRoute,
    private _paisService  : PaisService
    ) { }

  ngOnInit(): void {
    
    this._activatedRoute.params
    .pipe(
      switchMap( (param) => this._paisService.getCodigoPais(param['codigoPais']) )
      ,tap(console.log)
    )
    .subscribe(pais => this.pais = pais);



    // this._activatedRoute.params
    // .subscribe( ({codigoPais}) =>{
    //   console.log(codigoPais);
    //   this._paisService.getCodigoPais(codigoPais)
    //   .subscribe(pais =>{
    //     console.log(pais);
        
    //   })
    // } );
    

  }
  

}
