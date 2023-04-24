import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/tutores/dashboard'] }
                ]
            },
            {
                label: 'Reportes de Alumnado',
                items: [
                    { label: 'Justificantes', icon: 'pi pi-fw pi-id-card', routerLink: ['/tutores/justificante'] },
                    { label: 'Canalización Psico', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/tutores/canalizacion-psicopedagogica'] },
                    { label: 'Asesoria', icon: 'pi pi-fw pi-comments', routerLink: ['/tutores/asesoria'] },

                ]
            },
            {
                label: 'Reportes Tutoriales',
                items: [
                    { label: 'Planeación', icon: 'pi pi-fw pi-calendar', routerLink:['/tutores/planeacion'] },
                ]
            },
 
        ];
    }
}
