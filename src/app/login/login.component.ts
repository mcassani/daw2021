import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';
import { DominioService } from '../services/dominio.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	enviado: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private servicioAutenticacion: AutenticacionService,
		private servicioDominio: DominioService
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			usuario: ['', [Validators.required, Validators.minLength(4)]],
			password : ['', Validators.required]
		});
	}

	get f() {
		return this.loginForm.controls;
	}

	onSubmit() {
		this.enviado = true;
		this.servicioAutenticacion.login(this.f.usuario.value, this.f.password.value);
		
	}


	pedirDominios() {
		this.servicioDominio.pedirDominios();
	}
}
