import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PagesComponent } from './pages.component';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    HomeComponent,
    InscripcionComponent,
    ReportesComponent,
    ServiciosComponent,
    PagesComponent
  ],
  imports: [
    SwiperModule,
    NgwWowModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    InscripcionComponent,
    ReportesComponent,
    ServiciosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
