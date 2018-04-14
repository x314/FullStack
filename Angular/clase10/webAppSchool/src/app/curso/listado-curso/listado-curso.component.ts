import { Component, OnInit } from '@angular/core';
import { CursoService } from "../../servicios/curso.service";
import { ICurso } from "../../modelos/curso.model";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { PopupCursoComponent } from "../popup-curso/popup-curso.component";
import { ConfirmacionComponent } from "../../compartido/confirmacion/confirmacion.component";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  // listadoCursos: ICurso[] = []
  columnasAMostrar: Array<string> = ['title', 'fechaCreacion', 'eliminado', 'accion']
  dataSource: MatTableDataSource<ICurso>
  suscripcion: Subscription

  constructor(private cursoService: CursoService, private dialogo: MatDialog) { }

  ngOnInit() {
    this.listado()
    // this.cursoService.listar()
    // .subscribe(
    //   (datos: ICurso[]) => {
    //     // this.listadoCursos = datos
    //     this.dataSource = new MatTableDataSource<ICurso>(datos)
    //   }
    // )
  }

  modificar(id: string) {
    this.suscripcion = this.cursoService.detallar(id)
      .subscribe(
        (data: ICurso) => {
          this.suscripcion.unsubscribe()
          this.popupCurso(false, {
            id, ...data
          })
        },
        error => console.log(error)
      )
  }

  listado() {
	  this.cursoService.listar()
    .subscribe(
      (datos: any) => {
        const resultados = datos.map(item => {
          return {
            id: item.payload.doc.id, 
            ...item.payload.doc.data()
          }
        })
        this.dataSource = new MatTableDataSource<ICurso>
          (resultados)
      }
    )
  }

  eliminar(id: string) {
	  const referencia = this.dialogo.open(ConfirmacionComponent, {
      data: {
        mensaje: 'Esta seguro de querer eliminar?'
      }, 
      width: '300'
	  })
  
	  referencia.afterClosed()
		.subscribe(
		  respuesta => {
        // console.log(typeof)
        if (respuesta === 'true')
          this.cursoService.eliminar(id)
		  }
		)
  }

  popupCurso(accion: boolean, datos = null) {
    let referencia

    referencia = this.dialogo.open(PopupCursoComponent, {
      data: {
        accion, 
        datos
      }, 
      // disableClose: true, 
      height: '400'
    })
    
    referencia.afterClosed()
      .subscribe(
        respuesta => {
          if (respuesta === true) {
            // Actualizar listado
          }
          else if (respuesta === false) {
            // No se hace nada
          }
          else {
            // No se hace nada
          }
        }
      )
  }

}
