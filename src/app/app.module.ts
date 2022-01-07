import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//compnentes
import { AppComponent } from './app.component';

//rutas
import { APP_ROUTING } from './app.router';

//Modulos
import { ComponentModule } from './components/component.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   ComponentModule,
   BrowserModule,
   APP_ROUTING,
   RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
