import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//compnentes
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
//rutas
import { AppRoutingModule } from './routers/app-routing.module';

//Modulos
import { ComponentModule } from './components/component.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   ComponentModule,
   BrowserModule,
   RouterModule,
   AppRoutingModule,
   PagesModule,
   SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
