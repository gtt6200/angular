import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutoresRoutingModule } from './tutores-routing.module';
import { JustificanteModule } from './justificante/justificante.module';
import { TutoresComponent } from './tutores.component';
import { AsesoriaTutoriaComponent } from './asesoria-tutoria/asesoria-tutoria.component';
import { MyPageModule } from './my-page/my-page.module';


@NgModule({
  declarations: [
    TutoresComponent,
  ],
  imports: [
    CommonModule,
    TutoresRoutingModule,
    JustificanteModule
  ]
})
export class TutoresModule { }
