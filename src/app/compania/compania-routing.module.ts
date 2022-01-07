import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PagosComponent } from './pagos/pagos.component';


const routes: Routes = [
   { path: 'nosotros', component: NosotrosComponent},
   { path: ' politicas', component: PoliticasComponent},
   { path: 'faqs', component: FaqsComponent},
   { path: 'pagos', component: PagosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class companiaRoutingModule {}
