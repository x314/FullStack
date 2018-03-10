import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartamentoService } from "app/departamento.service";
import { LocalService } from "app/local.service";
import { NucleoModule } from "app/nucleo/nucleo.module";
import { DepartamentoModule } from "app/departamento/departamento.module";
import { LocalModule } from "app/local/local.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule, 
    DepartamentoModule, 
    LocalModule
  ],
  providers: [DepartamentoService, LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
