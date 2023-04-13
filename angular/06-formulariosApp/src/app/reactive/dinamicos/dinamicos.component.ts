import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this._formB.group({
    nombre : ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this._formB.array([
      ['Smash', Validators.required], 
      ['Mario Kart', Validators.required],
    ], Validators.required)
  });
  
  nuevoFavorito: FormControl = this._formB.control('', Validators.required);

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  
  constructor( private _formB : FormBuilder) { }
  
  ngOnInit(): void {
    
  }
  
  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched;
  }
  agregar(){
    if ( this.nuevoFavorito.invalid) {return;}
    this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
  borrar(i : number){
    this.favoritosArr.removeAt(i);
  }
  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
  
}