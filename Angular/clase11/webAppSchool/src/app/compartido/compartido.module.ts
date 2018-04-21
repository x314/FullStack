import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompartidoRoutingModule } from './compartido-routing.module';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { MaterialModule } from "../material/material.module";
import { FechaPipe } from "./fecha.pipe";

@NgModule({
  imports: [
    CommonModule,
	CompartidoRoutingModule, 
	MaterialModule
  ],
  declarations: [ConfirmacionComponent, FechaPipe], 
  exports: [ConfirmacionComponent, FechaPipe]
})
export class CompartidoModule { }
