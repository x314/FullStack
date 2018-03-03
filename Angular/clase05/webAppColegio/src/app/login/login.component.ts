import { Component, OnInit } from '@angular/core';
import { IUsuario } from "app/i-usuario";
import { AuthService } from "app/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: IUsuario = {email: '', password: ''}
  mensajeError: string

  constructor(private auth: AuthService, private ruteador: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.mensajeError =  this.auth.login(this.usuario)

    if (this.mensajeError == '') {
      this.ruteador.navigate(['home'])
    }

    // if (estado) {
    //   document.location.href = 'home'
    // }
  }

}
