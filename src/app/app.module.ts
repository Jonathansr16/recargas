import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//compnentes
import { AppComponent } from './app.component';

//modulos
import { ComponentModule } from './components/component.module';
import { AppRoutingModule } from './routers/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   ComponentModule,
   BrowserModule,
   AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
