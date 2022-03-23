import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { PagaquiComponent } from './pagaqui/pagaqui.component';
import { RecargakiComponent } from './recargaki/recargaki.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqsComponent } from './faqs/faqs.component';


//Modulos
import { SwiperModule } from 'swiper/angular';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [
    InicioComponent,
   ProductosComponent,
    PagaquiComponent,
    RecargakiComponent,
    InscripcionComponent,
    ContactoComponent,
    FaqsComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgwWowModule,
    RouterModule,
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    PagaquiComponent,
    RecargakiComponent,
    InscripcionComponent,
    ContactoComponent,
    FaqsComponent,
  ]
})
export class PagesModule { }
