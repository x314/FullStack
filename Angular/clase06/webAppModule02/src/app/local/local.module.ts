import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalRoutingModule } from './local-routing.module';
import { ListadoLocalComponent } from "app/local/listado-local/listado-local.component";
import { EdicionLocalComponent } from "app/local/edicion-local/edicion-local.component";
import { InsertarLocalComponent } from "app/local/insertar-local/insertar-local.component";

@NgModule({
  imports: [
    CommonModule,
    LocalRoutingModule
  ],
  declarations: [
    ListadoLocalComponent, 
    EdicionLocalComponent,
    InsertarLocalComponent
  ]
})
export class LocalModule { }
