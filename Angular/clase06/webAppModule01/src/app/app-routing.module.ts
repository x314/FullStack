import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { ListadoDepartamentoComponent } from './listado-departamento/listado-departamento.component';
import { EdicionDepartamentoComponent } from './edicion-departamento/edicion-departamento.component';
import { InsertarDepartamentoComponent } from './insertar-departamento/insertar-departamento.component';
import { ListadoLocalComponent } from './listado-local/listado-local.component';
import { EdicionLocalComponent } from './edicion-local/edicion-local.component';
import { InsertarLocalComponent } from './insertar-local/insertar-local.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const rutas: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'departamento', children: [
    {path: '', component:ListadoDepartamentoComponent}, 
    {path: 'edicion', component: EdicionDepartamentoComponent}, 
    {path: 'nuevo', component: InsertarDepartamentoComponent}
  ]}, 
  {path: 'local', children: [
    {path: '', component:ListadoLocalComponent}, 
    {path: 'edicion', component: EdicionLocalComponent}, 
    {path: 'nuevo', component: InsertarLocalComponent}
  ]}
]

@NgModule({
  declarations: [
    ListadoDepartamentoComponent,
    EdicionDepartamentoComponent,
    InsertarDepartamentoComponent,
    ListadoLocalComponent,
    EdicionLocalComponent,
    InsertarLocalComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ]
})
export class AppRoutingModule { }
