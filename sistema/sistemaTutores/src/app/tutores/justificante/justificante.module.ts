import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustificanteRoutingModule } from './justificante-routing.module';
import { JustificanteComponent } from './justificante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ProductService } from 'src/app/services/productservice';


@NgModule({
  declarations: [
    JustificanteComponent
  ],
  imports: [
    CommonModule,
    JustificanteRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ],
  providers: [
    ProductService
  ]
})
export class JustificanteModule { }
