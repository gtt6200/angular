import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this._formB.group({
    nombre : [,[Validators.required, Validators.minLength(3)]],
    favoritos: this._formB.array([
      ['Smash', Validators.required], 
      ['Mario Kart', Validators.required],
      ['Mario Kart', Validators.required],
      ['Mario Kart', Validators.required],
    ], Validators.required)
  });

  
  constructor( private _formB : FormBuilder) { }
  
  ngOnInit(): void {

  }
  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched;
  }
  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.favoritosArr.clear();
  }
  
}

// miFormulario: FormGroup = this._formB.group({
//   nombre : [,[Validators.required, Validators.minLength(3)]],
//   favoritos: this._formB.group({
//     opciones: this._formB.array<any>([
//       ['Smash', Validators.required],
//       ['Mario Party', Validators.required]
//     ], Validators.required)
//   })
// });