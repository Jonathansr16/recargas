import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { CarouselComponent } from './carousel/carousel.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
          CarouselComponent, 
          SectionComponent 
                ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    SectionComponent,
  ]
})
export class ComponentsModule { }
