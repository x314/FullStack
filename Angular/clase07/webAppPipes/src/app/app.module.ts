import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';

import { FormsModule } from '@angular/forms';
import { FiltrarListaPipe } from './filtrar-lista.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReducidorPipe,
    FiltrarListaPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: 'es-PE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
