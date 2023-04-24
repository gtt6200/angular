import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalizacionPsicopedagogicoComponent } from './canalizacion-psicopedagogico.component';

const routes: Routes = [
  { path: '',
    children: [
      {path: '', component: CanalizacionPsicopedagogicoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalizacionPsicopedagogicoRoutingModule { }
