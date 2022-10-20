import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/naruto.interface";


@Injectable()
export class NarutoService{

    private _listarPersonajes: Personaje []=[
        {
          nombre: 'Naruto',
          poder: 17000
        },{
          nombre: 'Sasuke',
          poder: 15000
        },{
          nombre: 'Sakura',
          poder:500
        }
      ]
    get personajes(): Personaje[]{
        return [...this._listarPersonajes];
    }
    constructor(){ }

    agregarPersonaje ( data: Personaje){
        this._listarPersonajes.push(data);
    }
}