import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
    { path: 'inicio', component: InicioComponent , canActivate : [AuthGuard]},
    { path: 'contacto', component: ContactoComponent, canActivate : [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'inicio' }
];

export const appRoutingModule = RouterModule.forRoot(routes);