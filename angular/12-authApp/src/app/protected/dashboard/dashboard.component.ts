import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [` *{margin:15px;}`
  ]
})
export class DashboardComponent implements OnInit {

  get usuario(){
    return this._authService.usuario;
  }

  constructor( 
    private _router: Router,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this._router.navigateByUrl('/auth/login');
    this._authService.logout();
  }

}
