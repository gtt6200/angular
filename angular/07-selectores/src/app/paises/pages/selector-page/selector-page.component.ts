import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServicesService } from '../../services/paises-services.service';
import { Pais, PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this._formB.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]]
  });

  //llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  alpha: PaisSmall[] = [];
  
  //ui
  cargando : boolean = false;

  constructor( private _formB : FormBuilder,
               private _paisesService: PaisesServicesService) { }

  ngOnInit(): void {
    this.regiones = this._paisesService.regiones;
    //cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          }),
          switchMap( region => this._paisesService.getPaisesPorRegion(region))
        )
        .subscribe( paises => {
          console.log(paises); 
          this.paises = paises;
          this.cargando = false;
        });

    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap( frontera => this._paisesService.getPaisPorCodigo(frontera)),
          switchMap(pais => this._paisesService.getPaisesPorCodigos(pais?.borders!))
        )
        .subscribe( alpha => {
          console.log(alpha);
          this.alpha = alpha;
          this.cargando = false;
        });
  }

  guardar(){
    console.log(this.miFormulario.value);
    
  }

}
