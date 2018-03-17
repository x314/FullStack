import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NucleoModule } from "app/nucleo/nucleo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
