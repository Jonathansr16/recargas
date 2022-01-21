import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { FaqsComponent } from './faqs/faqs.component';


const routes: Routes = [
    
     { path: 'nosotros', component: NosotrosComponent, data: { titulo: '¿Quienes Somos?'} },
     { path: 'faqs', component: FaqsComponent, data: { titulo: 'Preguntas Frecuentes'}},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule {}
