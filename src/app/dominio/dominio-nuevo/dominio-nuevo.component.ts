import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DominioService } from 'src/app/services/dominio.service';

@Component({
	selector: 'app-dominio-nuevo',
	templateUrl: './dominio-nuevo.component.html',
	styleUrls: ['./dominio-nuevo.component.css']
})
export class DominioNuevoComponent implements OnInit {

	formulario: FormGroup;
	titulo: string;

	constructor(
		private formBuilder: FormBuilder,
		public rutaActiva: ActivatedRoute,
		public servicioDominio: DominioService
	) { }

	ngOnInit() {

		this.titulo = this.rutaActiva.snapshot.params.id;
		this.formulario = this.formBuilder.group({
			nombre: ['', [Validators.required, Validators.minLength(4)]],
		});
	}

	get f() {
		return this.formulario.controls;
	}

	onSubmit() {
		// this.servicioDominio.guardar(this.f.usuario.value, this.f.password.value).subscribe((rta) => {
		// 	console.log('login');
		// 	//Navegar al inicio
		// 	this.router.navigate(['dominios']);
		// }, (error) => {
		// 	console.log(error);
		// });
	}

}
