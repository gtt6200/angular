import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  {
    path: 'tutores',
    children: [
     { path: 'dashboard', component: MyPageComponent },
     { path: 'justificante', loadChildren: () => import('./justificante/justificante.module').then(m => m.JustificanteModule)},
     { path: 'canalizacion-psicopedagogica', loadChildren: () => import('./canalizacion-psicopedagogico/canalizacion-psicopedagogico.module').then(m => m.CanalizacionPsicopedagogicoModule)},
     { path: 'asesoria', loadChildren: ()=> import('./asesoria-tutoria/asesoria-tutoria.module').then(m => m.AsesoriaTutoriaModule) },
     { path: 'planeacion', loadChildren: ()=> import('./planeacion/planeacion.module').then(m => m.PlaneacionModule) },
     {path: '**', redirectTo: '/tutores/dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoresRoutingModule { }
