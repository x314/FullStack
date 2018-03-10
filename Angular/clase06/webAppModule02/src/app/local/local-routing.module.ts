import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLocalComponent } from "app/local/listado-local/listado-local.component";
import { EdicionLocalComponent } from "app/local/edicion-local/edicion-local.component";
import { InsertarLocalComponent } from "app/local/insertar-local/insertar-local.component";

const routes: Routes = [
  {path: 'local', children: [
    {path: '', component:ListadoLocalComponent}, 
    {path: 'edicion', component: EdicionLocalComponent}, 
    {path: 'nuevo', component: InsertarLocalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalRoutingModule { }
