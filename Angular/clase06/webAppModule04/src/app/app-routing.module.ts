import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { LoginComponent } from "app/nucleo/login/login.component";
import { HomeComponent } from "app/nucleo/home/home.component";

const rutas: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'departamento', loadChildren: './departamento/departamento.module#DepartamentoModule'},
  {path: 'local', loadChildren: './local/local.module#LocalModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
