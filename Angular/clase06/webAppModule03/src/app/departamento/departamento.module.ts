import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDepartamentoComponent } from "app/departamento/listado-departamento/listado-departamento.component";
import { EdicionDepartamentoComponent } from "app/departamento/edicion-departamento/edicion-departamento.component";
import { InsertarDepartamentoComponent } from "app/departamento/insertar-departamento/insertar-departamento.component";
import { DepartamentoRoutingModule } from "app/departamento/departamento-routing.module";

@NgModule({
  imports: [
    CommonModule, 
    DepartamentoRoutingModule
  ],
  declarations: [
    ListadoDepartamentoComponent, 
    EdicionDepartamentoComponent, 
    InsertarDepartamentoComponent
  ]
})
export class DepartamentoModule { }
