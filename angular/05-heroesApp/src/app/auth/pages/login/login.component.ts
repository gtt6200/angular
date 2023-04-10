import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


export class LoginComponent {

  constructor( private _route: Router,
               private _authService : AuthService){}
  login(){
    //ir al backend
    this._authService.login()
    .subscribe(resp => {
      console.log(resp);
      if(resp.id){
        
        this._route.navigate(['../heroes']);
      }
    }
    );

  }

}
