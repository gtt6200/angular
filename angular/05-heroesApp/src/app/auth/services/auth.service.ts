import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string= environment.apiUrl;
  private _auth: Auth | undefined;

  get auth(){
    return{...this._auth};
  }

  constructor( private _http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
    if( !localStorage.getItem('id') ){
      return of(false);
    }
    //la funcion of resuelve el observable, bien puede funcionar si pedimos que regrese un boolean
    //en el tipo de la funcion "Observable<boolean> | boolean" de esta manera
    return this._http.get<Auth>(`${this.apiUrl}/usuarios/1`)
                      .pipe(
                        map( auth=> {
                          this._auth = auth
                          return true;
                        })
                      );
  }

  login(){
    return this._http.get<Auth>(`${this.apiUrl}/usuarios/1`)
            .pipe(
              tap(auth => this._auth = auth),
              tap(auth=> localStorage.setItem('id', auth.id))
            );
  }
  loguot(){
    this._auth = undefined;
  }

}
