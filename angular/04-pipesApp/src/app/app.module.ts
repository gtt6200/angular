import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

//modulo de las rutas
import { AppRouterModule } from './app-router.module';

//Modulo Personalizado
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//CAMBIAR EL LOCAL DE LA APP
//esto es para cambiar todos lod formatos al pais seleccionado
import localeEsMX from '@angular/common/locales/es-MX';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEsMX);
registerLocaleData(localeJa);

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
  providers: [
    //esta parte selecciona a los import del localeEsMX y la funcion
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
