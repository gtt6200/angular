import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalizacionPsicopedagogicoRoutingModule } from './canalizacion-psicopedagogico-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ProductService } from 'src/app/services/productservice';
import { CanalizacionPsicopedagogicoComponent } from './canalizacion-psicopedagogico.component';


@NgModule({
  declarations: [
    CanalizacionPsicopedagogicoComponent
  ],
  imports: [
    CommonModule,
    CanalizacionPsicopedagogicoRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  providers: [
    ProductService
  ]
})
export class CanalizacionPsicopedagogicoModule { }
