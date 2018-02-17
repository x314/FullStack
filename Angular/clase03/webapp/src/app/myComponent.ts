
import { Component } from "@angular/core";

@Component({
  selector: 'app-mycomponent', 
  // template: '<h1>{{titulo}}</h1>', 
  templateUrl: './mycomponent.html', 
  // styles: ['h1 {color:red; font-size:30px;}'], 
  styleUrls: ['./mycomponent.css']
})

export class myComponent {
  titulo: string = 'Curso FullStack'
  activa: boolean = false

  constructor() {
    setTimeout(() => {
      this.titulo = 'Curso FullStack (JS+Angular+Node)'
    }, 3000);

    // setTimeout(() => {
    //   this.activa = !this.activa
    // }, 1000);
  }

  cambiarActiva() {
    this.activa = true
  }
}
