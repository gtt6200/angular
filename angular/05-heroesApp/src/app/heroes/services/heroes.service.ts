import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.apiUrl;

  constructor( private _http: HttpClient ) { }


  getHeroes(): Observable<Heroe[]>{
    
    return this._http.get<Heroe[]>(`${this.apiUrl}/heroes`);
  }
  getHeroePorId(heroeId : string): Observable<Heroe>{
    return this._http.get<Heroe>(`${this.apiUrl}/heroes/${heroeId}`);
  }
  getSugerencias(termino: string): Observable<Heroe[]>{
    return this._http.get<Heroe[]>(`${this.apiUrl}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this._http.post<Heroe>(`${this.apiUrl}/heroes`, heroe);
  }
  actualizarHeroe(heroe: Heroe): Observable<Heroe>{
    return this._http.put<Heroe>(`${this.apiUrl}/heroes/${heroe.id}`, heroe);
  }
  eliminarHeroe(id: string): Observable<any>{
    return this._http.delete<any>(`${this.apiUrl}/heroes/${id}`);
  }

}
