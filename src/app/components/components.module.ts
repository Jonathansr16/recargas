import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { CarouselComponent } from './carousel/carousel.component';
import { MinfoComponent } from './minfo/minfo.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';


@NgModule({
  declarations: [
          CarouselComponent, 
          MinfoComponent, 
          JumbotronComponent
                ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    MinfoComponent,
    JumbotronComponent
  ]
})
export class ComponentsModule { }
