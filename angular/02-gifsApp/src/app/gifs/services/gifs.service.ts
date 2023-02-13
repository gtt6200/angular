import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial : string []=[];
  private _apiKey : string = 'TermzMqvZNTbcjHEHxs2cyJb1aDnYL0G';
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  public resultados: Gif[]=[];

  get historial(){
    //los tres puntos rompe la relacion del arreglo
    //lo que lo hace mas seguro 
    return [...this._historial];
  }
  constructor(
    private _http : HttpClient
  ){
    //Esto es exactamente lo mismo que el if de abajo, pero en una sola linea
    // this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    //valida si hay algo en el historial para no obtener un valor nulo
    if (localStorage.getItem('historial') && localStorage.getItem('resultados')) {
      //el adminracion le dice a TS que no va a estar nulo porque ya se valido
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }

  }

  buscargGifs( query:string= ''){
    //el trim elimina los espacios en blanco al inicio y el final
    //y lo  otro pone todo el Mminusculas
    query = query.trim().toLocaleLowerCase();
    if ( !this._historial.includes(query)) {
      //Inserts new elements at the start 
      //of an array, and returns the new length of the array.
      this._historial.unshift(query);
    //la variable se iguala al mismo valor que recibe pero el arreglo
    //se partira en los primeros 10 datos
    this._historial = this._historial.splice(0,9);

    localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', '10')
    .set('q',query);

    // console.log(params.toString());
   //las comillas inversas permiten insertar codigo
    this._http.get<SearchGifsResponse>(`${this._servicioUrl}/search`, {params})
    .subscribe((resp) =>{
      // console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
    
  }

}
