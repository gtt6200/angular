import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaneacionRoutingModule } from './planeacion-routing.module';
import { PlaneacionComponent } from './planeacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    PlaneacionComponent
  ],
  imports: [
    CommonModule,
    PlaneacionRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class PlaneacionModule { }
