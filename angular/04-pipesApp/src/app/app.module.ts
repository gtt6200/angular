import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulo de las rutas
import { AppRouterModule } from './app-router.module';

//Modulo Personalizado
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
