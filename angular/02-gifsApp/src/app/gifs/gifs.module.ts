import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPaceComponent } from './gifs-pace/gifs-pace.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPaceComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GifsPaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
