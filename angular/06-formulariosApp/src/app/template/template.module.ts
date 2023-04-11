import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwithesComponent } from './swithes/swithes.component';
import { CustomMinDirective } from './directives/custom-min-directive';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwithesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
