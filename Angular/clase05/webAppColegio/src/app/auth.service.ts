import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from "app/i-usuario";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private usuarios: IUsuario[] = [
    {
      idUser: 1, 
      email: 'alex@correo.com', 
      password: '54321', 
      rol: 'admin'
    }, 
    {
      idUser: 2, 
      email: 'rubi@correo.com', 
      password: '12345',
      rol: 'operador'
    }
  ]

  private estadoUsuario: boolean = false

  cambioEstado = new EventEmitter<boolean>()

  constructor(private ruteador: Router) { }

  login(usuario: IUsuario): string {
    const usuarioEncontrado = this.usuarios.find(elm => {
      if (elm.email.toLowerCase().trim() === usuario.email.toLowerCase().trim()) {
        return true
      }
      return false
    })

    if (usuarioEncontrado) {
      localStorage.setItem('logueado', JSON.stringify(usuarioEncontrado))
      // this.estadoUsuario = true
      this.cambioEstado.emit(true)
    }

    return usuarioEncontrado ? '' : 'Datos inválidos'
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
