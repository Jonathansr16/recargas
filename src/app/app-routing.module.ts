import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PagaquiComponent } from './pages/pagaqui/pagaqui.component';
import { RecargakiComponent } from './pages/recargaki/recargaki.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


const routes: Routes = [
   
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'pagaqui', component: PagaquiComponent },
  { path: 'recargaki', component: RecargakiComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'faqs', component: FaqsComponent },
    { path: '**',  redirectTo: 'inicio' },
    
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' }),
   
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
