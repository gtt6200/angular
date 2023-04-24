import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustificanteComponent } from './justificante.component';

const routes: Routes = [
  {
    path: '',
    component: JustificanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JustificanteRoutingModule { }
