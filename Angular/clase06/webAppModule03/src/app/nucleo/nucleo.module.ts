import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "app/nucleo/header/header.component";
import { HomeComponent } from "app/nucleo/home/home.component";
import { LoginComponent } from "app/nucleo/login/login.component";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  imports: [
    CommonModule, 
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    HomeComponent, 
    LoginComponent
  ], 
  exports: [
    AppRoutingModule, 
    HeaderComponent
  ]
})
export class NucleoModule { }
