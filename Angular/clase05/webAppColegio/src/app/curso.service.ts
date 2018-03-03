import { Injectable } from '@angular/core';
import { ICurso } from "app/i-curso";

@Injectable()
export class CursoService {

  private cursos: ICurso[] = [
    {
      idCurso: 1, 
      title: 'Javascript'
    },
    {
      idCurso: 2, 
      title: 'Angular'
    },
    {
      idCurso: 3, 
      title: 'Node'
    }
  ]

  constructor() { }

  listar(): ICurso[] {
    // slice(): Genera una copia del arreglo
    return this.cursos.slice()
  }

  insertar(curso: ICurso): boolean {
    this.cursos.push(curso)
    return true
  }

  actualizar(curso: ICurso): boolean {
    const posicion = this.cursos.findIndex(
      item => item.idCurso == curso.idCurso
    )
    this.cursos[posicion] = curso
    return true
  }

  eliminar(id: number): boolean {
    const posicion = this.cursos.findIndex(
      item => item.idCurso == id
    )
    this.cursos.splice(posicion, 1)
    return true
  }

  detalle(id: number): ICurso {
    const posicion = this.cursos.findIndex(
      item => item.idCurso == id
    )
    return this.cursos[posicion]
  }

}
