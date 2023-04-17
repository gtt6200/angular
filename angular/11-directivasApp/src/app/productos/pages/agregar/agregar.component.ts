import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  texto1: string = "Alex";
  color: string = 'blue'
  miFormulario: FormGroup = this._formB.group({
    nombre: ['', Validators.required]
  });

  constructor( private _formB : FormBuilder) { }

  

  ngOnInit(): void {
  }
  tieneError(campo: string): boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }
  cambiarNombre(){
    const texto: string = Math.random().toString();
    this.texto1 = texto;
  }
  cambiarColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
