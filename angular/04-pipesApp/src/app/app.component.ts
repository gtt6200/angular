import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _primengConfig: PrimeNGConfig){}

  title = 'pipesApp';

  nombre : string = 'yuniel duarte';
  valor : number = 32198156498;
  obj = {
    nombre: 'Yuniel'
  }
  ngOnInit() {
    this._primengConfig.ripple = true;
  }
  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

}