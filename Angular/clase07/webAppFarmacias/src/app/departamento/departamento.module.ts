import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { ListadoDepaComponent } from './listado-depa/listado-depa.component';
import { EdicionDepaComponent } from './edicion-depa/edicion-depa.component';
import { DepaComponent } from './depa/depa.component';

@NgModule({
  imports: [
    CommonModule,
    DepartamentoRoutingModule
  ],
  declarations: [ListadoDepaComponent, EdicionDepaComponent, DepaComponent]
})
export class DepartamentoModule { }
