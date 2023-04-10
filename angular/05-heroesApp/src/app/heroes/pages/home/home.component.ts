import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent {


  get auth(){
    return this._authService.auth;
  }
  constructor( private _route : Router,
               private _authService: AuthService){}
  logout(){
    //ir al backend

    this._route.navigate(['./auth/login']);

  }
}
