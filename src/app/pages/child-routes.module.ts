import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ContactoComponent } from './contacto/contacto.component';



const childRoutes: Routes = [

    { path: '', component: HomeComponent, data: { titulo: 'Inicio'} },
    { path: 'servicios', component: ServiciosComponent, data: {titulo: 'Nuestros servicios'} },
    { path: 'reportes', component: ReportesComponent, data: { titulo: 'Reporte de Depositos'} },
    { path: 'inscripcion', component: InscripcionComponent, data: { titulo: 'Inscripcion'} },
    { path: 'contacto', component: ContactoComponent, data: { titulo: 'Contacto'} }
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildRoutesModule { }
  