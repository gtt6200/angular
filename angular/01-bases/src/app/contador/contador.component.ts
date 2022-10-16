import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>

        <h3>La base es: <strong>55</strong></h3>

        <button (click)="acumularCinco(numero, true)"> + 5 </button>
        <span> {{base}} </span>
        <button (click)="acumularCinco(numero, false)"> - 5 </button>
    `
})
export class ContadorComponent{
    title: string = 'Contador App';
    base: number = 55;
    numero:number = 5;
    acumular( valor: number){
      this.numero += valor;
    }
    acumularCinco(base:number, op:boolean){
      if (op == true) {
        this.base += base;
      } else {
        this.base -= base;
      }
    }
}