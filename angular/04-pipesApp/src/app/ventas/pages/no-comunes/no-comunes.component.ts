import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
//i18nSelecte
  nombre: string = 'Alejandra';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
//i18nPlural
clientes: string[] = ['Maria', 'Juan', 'Pedro', 'Yuniel', 'Alejandro'];
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos 2 clientes esperando',
  'other': 'tenemos # clientes esperando'
}

cambiar(){
  this.nombre = 'yuniel';
  this.genero = 'masculino';
}
borrar(){
  this.clientes.pop();
}

//KeyValuePipe
persona = {
  nombre: 'Yuniel',
  edad:22,
  direccion: 'Parral, Mexico'
}

//json Pipes
heroes= [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]

//Asyn Pipe

//observable con rjxs Es como si fuera una subscribe
miObservable = interval(1000); //0,1,2,3,4,5,6
valorPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Tenemos data de la Promesa')
  }, 3500);
});

}

