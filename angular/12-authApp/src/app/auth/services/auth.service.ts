import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: Usuario;

  get usuario(){
    return {...this._user};
  }

  constructor( private _http: HttpClient) { }

  registro(name:string, email: string, password:string){
    const url = `${this.baseUrl}/auth/new`;
    const body = {name, email, password};
    return this._http.post<AuthResponse>(url, body)
      .pipe(
        tap( ({ok, token})=> {
          if(ok){
            localStorage.setItem('token', token!);
          }
        }),
        map(valido => valido.ok),
        catchError(err => of(err.error.mdg))
      );
  }
  login(email: string, password:string){
    const url = `${this.baseUrl}/auth`;
    const body = {email, password};
    return this._http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp=> {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!);
            console.log(this._user);
          }
         }),
        map(valido => valido.ok),
        catchError( err => of(err.error.mdg))
      );
  }

  validarToken():Observable<boolean>{
    const url = `${this.baseUrl}/auth/renew`;
    const headers =  new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '');
    return this._http.get<AuthResponse>(url, {headers}).pipe(
      map( resp => {
        localStorage.setItem('token', resp.token!);
            this._user = {
              name: resp.name!,
              email: resp.email!,
              uid: resp.uid!
            }     
        return resp.ok;
      }),
      catchError(err => of(false))
    );
  }
  logout(){
    localStorage.removeItem('token');
  }

}
