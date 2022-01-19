import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ServiciosComponent } from './servicios/servicios.component';


//Modulos
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    HomeComponent,
    InscripcionComponent,
    ReportesComponent,
    ServiciosComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule,

  ],
  exports: [
    HomeComponent,
    InscripcionComponent,
    ReportesComponent,
    ServiciosComponent
  ]
})
export class PagesModule { }
