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

   BrowserModule,
   AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
