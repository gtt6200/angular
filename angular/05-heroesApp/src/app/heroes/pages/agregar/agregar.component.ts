import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius:5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit{

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  editoriales = [{
    id: 'DC Comics',
    desc: 'DC - Comics'
  },{
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }]

  constructor(
     private _heroesService : HeroesService,
     private _activatedRouter: ActivatedRoute,
     private _router: Router,
     private _snackBar: MatSnackBar,
     private _dialog : MatDialog
     ){} 
  
  ngOnInit(): void {

    if ( !this._router.url.includes('editar') ) {
      return;
    }

    this._activatedRouter.params
    .pipe(
      switchMap( ({id}) => this._heroesService.getHeroePorId(id))
    )
    .subscribe( heroe => this.heroe = heroe
    );
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    if (this.heroe.id) {
      //actualizar
      this._heroesService.actualizarHeroe(this.heroe)
      .subscribe(
        resp => {
          this.mostrarSnackBar('Registro Actualizado');
        }
      )
    } else {
      // crear
       this._heroesService.agregarHeroe(this.heroe)
        .subscribe(
          heroe => {
            this._router.navigate(['/heroes/editar', heroe.id]);
            this.mostrarSnackBar('Registro Creado');
          }
        );
    }
  }

  borrarHeroe(){
   const dialog = this._dialog.open(ConfirmarComponent, {
      width: '350px',
      data: this.heroe
    });
    dialog.afterClosed().subscribe(
      (result)=> {
        if(result){
          this._heroesService.eliminarHeroe(this.heroe.id!)
          .subscribe(
            resp => {
              this._router.navigate(['/heroes/listado']);
              this.mostrarSnackBar('Registro Eliminado');
            }
          )
        }
      }
      
    )

  }

  mostrarSnackBar(mensaje:string):void{
    this._snackBar.open(mensaje, 'Cerrar', {duration:2500});
  }

}
