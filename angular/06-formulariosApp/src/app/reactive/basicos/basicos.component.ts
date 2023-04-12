import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

//METODO PARA HACER EL GRUPO DE FORMULARIOS UNO A UNO SEGUN LOS INPUTS

  // miFormulario : FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080'),
  //   'precios': new FormControl(10),
  //   'existencias': new FormControl(110)
  // });

miFormulario: FormGroup = this._formB.group({
  //el primer campo es el valor, el segudo son validaccines sincronas, el tercero son validaiones asincronas
  //el orden es separado por cada coma
  nombre: [ , [Validators.required, Validators.minLength(3)] ],
  precio: [ , [Validators.required, Validators.min(0)] ],
  existencias: [, [Validators.required, Validators.min(0)]]
});



  constructor( private _formB : FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'yuniel',
      precio: 2
    });
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
