import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { MyPageComponent } from './tutores/my-page/my-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { TutoresModule } from './tutores/tutores.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AppLayoutModule,
    PrimeNgModule,
    TutoresModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
