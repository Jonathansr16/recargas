import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { FaqsComponent } from '../pages/faqs/faqs.component';
import { HomeComponent } from '../pages/home/home.component';
import { InscripcionComponent } from '../pages/inscripcion/inscripcion.component';
import { PagaquiComponent } from '../pages/pagaqui/pagaqui.component';
import { ProductosComponent } from '../pages/productos/productos.component';
import { RecargakiComponent } from '../pages/recargaki/recargaki.component';


const routes: Routes = [

    { path: 'pages', loadChildren: () => import( '../pages/pages.module').then(m => m.PagesModule)},
    { path: '', component: HomeComponent},
    { path: 'productos', component: ProductosComponent, data: {titulo: 'Nuestros Productos'} },
    { path: 'pagaqui', component: PagaquiComponent, data: {titulo: 'Reporte de Pagaqui'} } ,
    { path: 'recargaki', component: RecargakiComponent, data: {titulo: 'Reporte de Recargaki'} } ,
    { path: 'inscripcion', component: InscripcionComponent, data: {titulo: 'Inscripción'} } ,
    { path: 'contacto', component: ContactoComponent, data: {titulo: 'Contacto'} },
    { path: 'faqs', component: FaqsComponent, data: {titulo: 'Preguntas Frecuentes'}},
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
