import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

	private token: string;
	
	constructor(private http: HttpClient) { }
	
	login(usuario: string, pass: string) {

		var tokenUsuario = 'Basic ' + window.btoa(usuario + ':' + pass);

		var opciones = {
			headers: new HttpHeaders({'Authorization' : tokenUsuario })
		}

		this.http.get(environment.url + 'login', opciones).subscribe((rta) => {
			//Se logueo con exito
			this.token = tokenUsuario;
		}, (error) => {
			console.log(error);
		});
	}

	get tokenAutorizado() {
		return this.token;
	}

}