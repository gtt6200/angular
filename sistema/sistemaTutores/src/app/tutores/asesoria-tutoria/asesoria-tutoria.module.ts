import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoriaTutoriaRoutingModule } from './asesoria-tutoria-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AsesoriaTutoriaComponent } from './asesoria-tutoria.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AsesoriaTutoriaComponent
  ],
  imports: [
    CommonModule,
    AsesoriaTutoriaRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class AsesoriaTutoriaModule { }
