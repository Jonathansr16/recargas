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
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
      { path: '', component: PagesComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'servicios', component: ServiciosComponent },
        { path: 'pagaqui', component: PagaquiComponent} ,
        { path: 'recargaki', component: RecargakiComponent } ,
        { path: 'inscripcion', component: InscripcionComponent } ,
        { path: 'contacto', component: ContactoComponent },
        { path: 'faqs', component: FaqsComponent},
        { path: 'nosotros', component: NosotrosComponent},
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
