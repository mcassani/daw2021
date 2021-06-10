import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	enviado: boolean;

	constructor(
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			usuario: ['', [Validators.required, Validators.minLength(5)]],
			password : ['', Validators.required]
		});
	}

	onSubmit() {
		console.log(this.loginForm);
		this.enviado = true;
	}

}
