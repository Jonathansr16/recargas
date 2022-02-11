import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { PagaquiComponent } from './pagaqui/pagaqui.component';
import { RecargakiComponent } from './recargaki/recargaki.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PagesComponent } from './pages.component';


//Modulos
import { PagesRoutingModule } from './pages.routing.module';
import { SwiperModule } from 'swiper/angular';
import { NgwWowModule } from 'ngx-wow';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
   ProductosComponent,
    PagaquiComponent,
    RecargakiComponent,
    InscripcionComponent,
    FaqsComponent,
    ContactoComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgwWowModule,
    RouterModule,
    SharedModule,
    PagesRoutingModule,
    
  ],
  exports: [
    HomeComponent,
    ProductosComponent,
    PagaquiComponent,
    RecargakiComponent,
    InscripcionComponent,
    FaqsComponent,
    ContactoComponent,
    PagesComponent
  ]
})
export class PagesModule { }
