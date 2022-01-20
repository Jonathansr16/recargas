import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherRoutingModule } from '../others/other-routing.module';

//Modulos
import { PagesRoutingModule } from '../pages/pages.routing.module';


const routes: Routes = [

    { path: 'pages', loadChildren: () => import( '../pages/pages.module').then(m => m.PagesModule)},
    { path: 'others', loadChildren: () => import('../others/others.module').then(m => m.OthersModule)},

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    OtherRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
