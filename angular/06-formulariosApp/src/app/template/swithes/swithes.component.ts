import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swithes',
  templateUrl: './swithes.component.html',
  styles: [
  ]
})
export class SwithesComponent {
  persona = {
    genero: 'F',
    notificaciones: true
  }
  terminosCondiciones: boolean = false;
}
