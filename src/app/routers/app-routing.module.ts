import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherRoutingModule } from '../others/other-routing.module';

//Modulos
import { PagesRoutingModule } from '../pages/pages.routing.module';



const routes: Routes = [

    //path: '/dashboard' PagesRouting
    //path: '/auth' AuthRouting
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
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
