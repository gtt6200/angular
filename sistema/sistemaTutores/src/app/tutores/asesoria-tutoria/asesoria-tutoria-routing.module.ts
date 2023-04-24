import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoriaTutoriaComponent } from './asesoria-tutoria.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: AsesoriaTutoriaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesoriaTutoriaRoutingModule { }
