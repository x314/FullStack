import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/nucleo/login/login.component";
import { HomeComponent } from "app/nucleo/home/home.component";

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent, 
    pathMatch: 'full'
  }, 
  {
    path: 'home', 
    component: HomeComponent
  }, 
  {
    path: 'depas', 
    loadChildren: '../departamento/departamento.module#DepartamentoModule'
  }, 
  {
    path: 'locales', 
    loadChildren: '../locales/locales.module#LocalesModule'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
