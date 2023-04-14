import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  
  

  miFormulario: FormGroup = this._formB.group({
    nombre: ['', [Validators.required, Validators.pattern(this._validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern)], [this._emailValidatos]],
    username: ['', [Validators.required, this._validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmarPass: ['', [Validators.required]],
  }, {
    validators: [this._validatorService.camposIguales('password', 'confirmarPass')]
  });

  get emailErrorMsg(): string {
    const error = this.miFormulario.get('email')?.errors;
    if (error?.['required']) {
      return 'El campo es obligatorio'
    } else if (error?.['pattern']) {
      return 'No es un correo valido'
    } else if (error?.['emailTomado']) {
      return 'El correo ingresado ya existe'
    }
    return '';
  }

  constructor(private _formB : FormBuilder,
              private _validatorService : ValidatorService,
              private _emailValidatos: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset(
      {nombre: 'Yuniel Duarte', 
       email: 'test1@test.com', 
       username: 'ElYuno',
       password: '111111',
       confirmarPass: '111111'}
      );
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched;
  }


  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.['required'] &&
  //          this.miFormulario.get('email')?.touched;
  // }
  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.['pattern'] &&
  //          this.miFormulario.get('email')?.touched;
  // }
  // emailExistente(){
  //   return this.miFormulario.get('email')?.errors?.['emailTomado'] &&
  //          this.miFormulario.get('email')?.touched;
  // }


  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
    
  }

}
