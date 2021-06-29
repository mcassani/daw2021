import { Component, OnInit } from '@angular/core';
import { DominioService } from '../services/dominio.service';

@Component({
  selector: 'app-dominio',
  templateUrl: './dominio.component.html',
  styleUrls: ['./dominio.component.css']
})
export class DominioComponent implements OnInit {


	dominios: any;
  constructor(private servicioDominios : DominioService) { }

	ngOnInit() {
	  // Debo pedir los dominios al backend
		this.cargarDatos();
	}
	
	cargarDatos() {
		this.servicioDominios.pedirDominios().subscribe((rta) => {
			console.log(rta);
			this.dominios = rta;
		}, (error) => {
			console.log(error);
		});
	}


	otroMetodo() {
		this.cargarDatos();
	}

	ver(id: number) {
		alert(id);
	}

}
