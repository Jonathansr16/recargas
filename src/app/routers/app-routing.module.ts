import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherRoutingModule } from '../others/other-routing.module';
import { HomeComponent } from '../pages/home/home.component';

//Modulos
import { PagesRoutingModule } from '../pages/pages.routing.module';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent}
 
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


