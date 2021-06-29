import { Routes, RouterModule } from '@angular/router';
import { DominioComponent } from '../dominio/dominio.component';

import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { Authguard } from '../services/authguard.service';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'inicio', component: InicioComponent, canActivate : [Authguard] },
	{ path: 'dominios', component: DominioComponent, canActivate : [Authguard] },
	{ path: '**', redirectTo : 'inicio' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
