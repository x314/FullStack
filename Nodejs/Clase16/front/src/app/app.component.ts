import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from "@angular/common/http";
import { environment } from "environments/environment";
import * as io from 'socket.io-client'

interface IRegistro {
  titulo: string
  descripcion?: string
  foto?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registro: IRegistro
  progreso: number = 0
  socketio: any
  hora: any

  constructor(private http: HttpClient) {
    this.socketio = io.connect('http://localhost:4000')
  }

  ngOnInit() {
    this.socketio.on('hora', data => {
      this.hora = data
    })
    
    this.registro = {
      titulo: '', 
      descripcion: '', 
      foto: ''
    }
  }
  
  grabar(titulo: string, descripcion: string) {
    this.registro.titulo = titulo
    this.registro.descripcion = descripcion

    const fd: FormData = new FormData()
    fd.append('titulo', this.registro.titulo)
    fd.append('descripcion', this.registro.descripcion)

    if (this.registro.foto) {
      fd.append('foto', this.registro.foto)
    }

    // this.http.post(environment.apiRest, fd, {
    //   observe: 'body', 
    //   responseType: 'json'
    // }).subscribe(
    //   data => console.log(data), 
    //   error => console.log(error)
    // )

    const req = new HttpRequest('post', environment.apiRest, fd, {
      reportProgress: true
    })

    this.http.request(req)
      .subscribe(
        evento => {
          if (evento.type === HttpEventType.UploadProgress) {
            this.progreso = Math.floor(evento.loaded / evento.total * 100)
            console.log(`progreso ${this.progreso}`)
          } else if (evento.type === HttpEventType.Response) {
            console.log('Archivo subido')
          } else {
            console.log(evento.type)
          }
        }, 
        error => console.log(error)
      )
  }

  archivoAgregado(data: any) {
    const archivos: any = data.srcElement.files
    this.registro.foto = archivos[0]
  }

}
