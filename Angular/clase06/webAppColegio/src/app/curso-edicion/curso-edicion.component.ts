import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CursoService } from "app/curso.service";
import { ICurso } from "app/i-curso";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-curso-edicion',
  templateUrl: './curso-edicion.component.html',
  styleUrls: ['./curso-edicion.component.css']
})
export class CursoEdicionComponent implements OnInit {

  curso: ICurso
  desactivado: boolean = false

  constructor(private rutaActiva: ActivatedRoute, private cursoService: CursoService, private ruteador: Router) { }

  ngOnInit() {
		// snapshot: genera copia de la url
		// +: transforma string en number
		const id: number = +this.rutaActiva.snapshot.params.id
    this.cursoService.detalle(id)
      .subscribe(
        (data: ICurso) => this.curso = data, 
        (error: any) => console.log(error)
      )
	}
	
	grabar() {
    this.desactivado = true
		this.cursoService.actualizar(this.curso).subscribe(
      (data: ICurso) => {
        this.desactivado = false
        this.ruteador.navigate(['cursos'])
      }, 
      (error: any) => console.log(error)
    )
	}

}
