import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
