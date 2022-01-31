import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PagaquiComponent } from './pagaqui/pagaqui.component';
import { RecargakiComponent } from './recargaki/recargaki.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
      { path: '', component: PagesComponent, children: [
        { path: 'home', component: HomeComponent, data: {titulo: 'Home'} },
        { path: 'servicios', component: ServiciosComponent, data: {titulo: 'Nuestros Servicios'} },
        { path: 'pagaqui', component: PagaquiComponent, data: {titulo: 'Reporte de Pagaqui'} } ,
        { path: 'recargaki', component: RecargakiComponent, data: {titulo: 'Reporte de Recargaki'} } ,
        { path: 'inscripcion', component: InscripcionComponent, data: {titulo: 'Inscripción'} } ,
        { path: 'contacto', component: ContactoComponent, data: {titulo: 'Contacto'} },
        { path: 'faqs', component: FaqsComponent, data: {titulo: 'Preguntas Frecuentes'}},
        { path: '', redirectTo: 'home', pathMatch: 'full'}
      ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
