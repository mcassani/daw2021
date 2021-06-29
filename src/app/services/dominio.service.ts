import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

	constructor(private http: HttpClient) { }
	
	pedirDominios() {
		return this.http.get(environment.url + 'dominios');
	}
}
