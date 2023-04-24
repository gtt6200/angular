import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MyPageComponent } from './tutores/my-page/my-page.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./tutores/tutores.module').then(m => m.TutoresModule)},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
