import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from "app/i-usuario";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

  private estadoUsuario: boolean = false

  cambioEstado = new EventEmitter<boolean>()

  constructor(private ruteador: Router, private http: HttpClient) { }

  login(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>('http://cursos.tibajodemanda.com/usuarios/login', usuario, {
      observe: 'body', responseType: 'json'
    })
  }

  logout() {
    // this.estadoUsuario = false
    localStorage.clear()
    this.cambioEstado.emit(false)
    this.ruteador.navigate([''])
  }

  estaAutenticado(): boolean {
    if (localStorage.getItem('logueado')) {
      return true
    }
    return false
    // return this.estadoUsuario
  }

  rolUsuario(): string {
    const usuario: string = localStorage.getItem('logueado')
    return JSON.parse(usuario).rol
  }

}
