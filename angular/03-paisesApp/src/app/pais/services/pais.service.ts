import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  get parametrosBusqueda(){
    return new HttpParams()
    .set('fields', 'flags,capital,name,population,alpha2Code');

  }

  constructor(
    private http: HttpClient
  ) { }

  buscarPais( termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url, {params : this.parametrosBusqueda} ); 
  }
  buscarCapital( termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( url, {params : this.parametrosBusqueda}); 
  }
  getCodigoPais( codigoPais:string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${codigoPais}`;
    return this.http.get<Country>( url ); 
  }
  buscarRegion( region: string): Observable<Country[]>{

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    
    return this.http.get<Country[]>(url, {params : this.parametrosBusqueda})
    .pipe(
      tap(console.log)
    );
  }
}
