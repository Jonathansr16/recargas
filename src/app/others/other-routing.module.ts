import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FaqsComponent } from './faqs/faqs.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'nosotros', component: NosotrosComponent},
            { path: 'faqs', component: FaqsComponent }
        ]
    }
     
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule {}
