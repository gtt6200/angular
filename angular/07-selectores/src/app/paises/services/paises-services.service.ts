import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais, PaisSmall } from '../interfaces/paises.interface';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesServicesService {
  
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _apiUrl: string = 'https://restcountries.com/v2';

  get regiones(): string [] {
    return [ ...this._regiones];
  }

  constructor( private _http: HttpClient) { }

  getPaisesPorRegion( region: string): Observable<PaisSmall[]>{
    const url: string = `${this._apiUrl}/region/${region}?fields=name,alpha3Code`
    return this._http.get<PaisSmall[]>(url)
  }
  getPaisPorCodigo( codigo: string): Observable<Pais | null>{
    if (!codigo) {
      return of(null);
    }
    const url: string = `${this._apiUrl}/alpha/${codigo}`;
    return this._http.get<Pais>(url);
  }

  
  getPaisPorCodigoSmall( codigo: string): Observable<PaisSmall>{
    // if (!codigo) {
    //   return of(null);
    // }
    const url: string = `${this._apiUrl}/alpha/${codigo}?fields=name,alpha3Code`;
    return this._http.get<PaisSmall>(url);
  }
  getPaisesPorCodigos( borders: string[]): Observable<PaisSmall[]> {
    if ( !borders) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];
    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion)
    })

    return combineLatest( peticiones)
  }
  //?fields=name,alpha3Code
}
