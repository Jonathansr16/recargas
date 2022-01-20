import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NosotrosComponent } from './nosotros/nosotros.component';
import { FaqsComponent } from './faqs/faqs.component';

//modudles
import { OtherRoutingModule } from './other-routing.module';


@NgModule({
  declarations: [
    NosotrosComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
  
  ], exports: [
    NosotrosComponent,
    FaqsComponent
  ]
})
export class OthersModule { }
