import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//compnentes
import { AppComponent } from './app.component';

//modulos
import { AppRoutingModule } from './routers/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
=======

>>>>>>> df570ee849ad5b696d0f77b78e5cffdf887913c9
   BrowserModule,
   AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
