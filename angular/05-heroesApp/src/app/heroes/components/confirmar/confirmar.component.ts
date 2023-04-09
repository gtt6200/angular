import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [`
    h1, p {
    color: #ffffff;
    }
  `]
})
export class ConfirmarComponent implements OnInit{


  constructor( private _dialogRef: MatDialogRef<ConfirmarComponent>, 
               @Inject(MAT_DIALOG_DATA) public data: Heroe){}


  ngOnInit(): void { 
  }

  borrar(){
    this._dialogRef.close(true);
  }
  cerrar(){
    this._dialogRef.close();
  }
}
