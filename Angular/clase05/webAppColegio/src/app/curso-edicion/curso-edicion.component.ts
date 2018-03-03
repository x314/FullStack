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

  constructor(private rutaActiva: ActivatedRoute, private cursoService: CursoService, private ruteador: Router) { }

  ngOnInit() {
		// snapshot: genera copia de la url
		// +: transforma string en number
		const id: number = +this.rutaActiva.snapshot.params.id
		this.curso = this.cursoService.detalle(id)
		this.rutaActiva.params.subscribe(
			(parametros: Params) => {
				const id: number = parametros['id']
				this.curso = this.cursoService.detalle(id)
			}
		)
	}
	
	grabar() {
		this.cursoService.actualizar(this.curso)
		this.ruteador.navigate(['cursos'])
	}

}
