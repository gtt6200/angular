import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPaceComponent } from './gifs-pace/gifs-pace.component';



@NgModule({
  declarations: [
    GifsPaceComponent
  ],
  exports:[
    GifsPaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
