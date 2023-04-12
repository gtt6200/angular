import { Component} from '@angular/core';
interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] =[
    {
      texto: 'Basicos',
      ruta: '../template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: '../template/dinamicos'
    },
    {
      texto: 'Swithes',
      ruta: '../template/swithes'
    }
  ]
  reactiveMenu: MenuItem[] =[
    {
      texto: 'Basicos',
      ruta: '../reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: '../reactive/dinamicos'
    },
    {
      texto: 'Swithes',
      ruta: '../reactive/switches'
    }
  ]
}
