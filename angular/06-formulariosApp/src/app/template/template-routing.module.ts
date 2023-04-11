import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwithesComponent } from './swithes/swithes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basicos', component: BasicosComponent},
      {path: 'dinamicos', component: DinamicosComponent},
      {path: 'swithes', component: SwithesComponent},
      {path: '**', redirectTo: 'basicos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
