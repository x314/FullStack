import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule, 
    MaterialModule, 
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, NavComponent, LoginComponent, RegistroComponent], 
  exports: [
    HeaderComponent, 
    NavComponent, 
    NucleoRoutingModule, 
    RegistroComponent
  ]
})
export class NucleoModule { }
