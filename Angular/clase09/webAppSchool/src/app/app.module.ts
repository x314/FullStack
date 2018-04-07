import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AlumnoService } from "./servicios/alumno.service";
import { CursoService } from "./servicios/curso.service";
import { AutenticacionService } from "./servicios/autenticacion.service";
import { AutenticacionGuard } from "./servicios/autenticacion.guard";
import { PopupAlumnoComponent } from "./alumno/popup-alumno/popup-alumno.component";
import { PopupCursoComponent } from "./curso/popup-curso/popup-curso.component";
import { NucleoModule } from "./nucleo/nucleo.module";
import { MaterialModule } from "./material/material.module";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";
import { environment } from "../environments/environment.prod";
import { RegistroComponent } from "./nucleo/registro/registro.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    NucleoModule, 
    ReactiveFormsModule, 
    MaterialModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule
  ],
  providers: [
    AlumnoService, 
    CursoService, 
    AutenticacionService, 
    AutenticacionGuard
  ],
  bootstrap: [AppComponent], 
  entryComponents: [
    // PopupAlumnoComponent, 
    // PopupCursoComponent, 
    RegistroComponent
  ]
})
export class AppModule { }
