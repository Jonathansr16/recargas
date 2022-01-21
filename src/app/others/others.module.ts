import { NgModule } from '@angular/core';

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
    OtherRoutingModule,
  ],
   exports: [
    NosotrosComponent,
    FaqsComponent
  ]
})
export class OthersModule { }
