import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaneacionComponent } from './planeacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: PlaneacionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaneacionRoutingModule { }
