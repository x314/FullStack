import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "app/nucleo/login/login.component";
import { HomeComponent } from "app/nucleo/home/home.component";

const rutas: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
