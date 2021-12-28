import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { SuscripcionComponent } from './suscripcion/suscripcion.component';


@NgModule({
  declarations: [
    SuscripcionComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuscripcionComponent
  ]
})
export class PagesModule { }
