import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    NosotrosComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NosotrosComponent,
    FaqsComponent
  ]
})
export class OthersModule { }
