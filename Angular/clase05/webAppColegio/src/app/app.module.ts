import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { AuthService } from 'app/auth.service';
import { AlumnoService } from 'app/alumno.service';
import { CursoService } from 'app/curso.service';

import { FormsModule } from "@angular/forms";
import { AuthGuard } from "app/auth.guard";
import { AuthorizationGuard } from "app/authorization.guard";
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { CursoNuevoComponent } from './curso-nuevo/curso-nuevo.component';
import { CursoEdicionComponent } from './curso-edicion/curso-edicion.component';

const rutas: Routes = [
  {path: "", 		component: LoginComponent, pathMatch: 'full'},
  {path: "home", 	component: HomeComponent, canActivate: [AuthGuard]},
  {path: "alumnos", component: ListadoAlumnosComponent, canActivate: [AuthGuard]},
  // {path: "cursos", 	component: ListadoCursosComponent, canActivate: [AuthGuard, AuthorizationGuard]},
  // {path: "cursos/nuevo", 	component: CursoNuevoComponent},
  // {path: "cursos/edicion", 	component: CursoEdicionComponent},
  {
    path: "cursos", 
    // component: ListadoCursosComponent, 
    // canActivate: [AuthGuard], 
		// canActivateChild: [AuthGuard, AuthorizationGuard], 
		canActivateChild: [AuthGuard], 
    children: [
			{path: "", component: ListadoCursosComponent}, 
			{path: "edicion/:id", component: CursoEdicionComponent}, 
      {path: "nuevo", component: CursoNuevoComponent}
    ]
  },
  // {path: "**", redirectTo: ""}
  {path: "**", component: NoEncontradoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListadoAlumnosComponent,
    ListadoCursosComponent,
    NoEncontradoComponent,
    CursoNuevoComponent,
    CursoEdicionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [AuthService, AlumnoService, CursoService, AuthGuard, AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
