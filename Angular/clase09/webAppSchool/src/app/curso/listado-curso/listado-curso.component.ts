import { Component, OnInit } from '@angular/core';
import { CursoService } from "../../servicios/curso.service";
import { ICurso } from "../../modelos/curso.model";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  // listadoCursos: ICurso[] = []
  columnasAMostrar: Array<string> = ['title', 'fechaCreacion', 'eliminado']
  dataSource: MatTableDataSource<ICurso>

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.listar()
    .subscribe(
      (datos: ICurso[]) => {
        // this.listadoCursos = datos
        this.dataSource = new MatTableDataSource<ICurso>(datos)
      }
    )
  }

}
