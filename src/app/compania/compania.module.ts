import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { PagosComponent } from './pagos/pagos.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [
    NosotrosComponent,
    PoliticasComponent,
    PagosComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NosotrosComponent,
    PoliticasComponent,
    PagosComponent,
    FaqsComponent
  ]
})
export class CompaniaModule { }
