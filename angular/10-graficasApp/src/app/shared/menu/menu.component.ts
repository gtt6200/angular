import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent  {

  menu: MenuItem[] = [
    {ruta: '/graficas/barras', nombre: 'barras'},
    {ruta: '/graficas/barras-dobles', nombre: 'barras-dobles'},
    {ruta: '/graficas/dona', nombre: 'dona'},
    {ruta: '/graficas/dona-http', nombre: 'dona http'},
  ]
}
