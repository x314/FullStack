import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ListadoDepartamentoComponent } from "app/departamento/listado-departamento/listado-departamento.component";
import { EdicionDepartamentoComponent } from "app/departamento/edicion-departamento/edicion-departamento.component";
import { InsertarDepartamentoComponent } from "app/departamento/insertar-departamento/insertar-departamento.component";

const rutas: Routes = [
  {path: 'departamento', children: [
    {path: '', component:ListadoDepartamentoComponent}, 
    {path: 'edicion', component: EdicionDepartamentoComponent}, 
    {path: 'nuevo', component: InsertarDepartamentoComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ]
})
export class DepartamentoRoutingModule { }
