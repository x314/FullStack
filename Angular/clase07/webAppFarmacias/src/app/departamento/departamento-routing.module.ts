import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDepaComponent } from "app/departamento/listado-depa/listado-depa.component";
import { EdicionDepaComponent } from "app/departamento/edicion-depa/edicion-depa.component";

const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: '', 
        component: ListadoDepaComponent
      }, 
      {
        path: 'edicion/:id', 
        component: EdicionDepaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
