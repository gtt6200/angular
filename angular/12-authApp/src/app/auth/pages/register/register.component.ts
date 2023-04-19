import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this._formB.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor( 
    private _formB: FormBuilder,
    private _router : Router,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }
  registrar(){
    console.log(this.miFormulario.value);
    const {name, email, password} = this.miFormulario.value;

    this._authService.registro(name, email, password)
      .subscribe( ok => {
        if(ok === true){
          this._router.navigateByUrl('/dashboard');
        }else{
          //TODO: mostrar mensaje de error
          Swal.fire(
            'Error',
            ok,
            'error'
          )
        }
      }); 
  }

}
