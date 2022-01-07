import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


const APP_ROUTES: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'reportes', component:  ReportesComponent },
    { path: 'inscripcion', component: InscripcionComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
