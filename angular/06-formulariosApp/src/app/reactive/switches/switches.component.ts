import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this._formB.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private _formB: FormBuilder){}
  ngOnInit(): void {
    this.miFormulario.reset({...this.persona, condiciones: false});

//-------ESTO ES PARA SINCRONIZAR LOS VALORES DEL FORMULARIO Y LOS DE PERSONA----
//forma 2
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue => {console.log(newValue);
    // });
    //Forma 1
   // this.miFormulario.valueChanges.subscribe (form => {delete form.condiciones; this.persona = form});
   //Forma 1 con desestructuracion de datos 
  // this.miFormulario.valueChanges.subscribe (({condiciones, ...rest}) => { this.persona = rest});
  }

  guardar(){
    const formValue = { ...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }
}
