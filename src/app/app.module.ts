import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//compnentes
import { AppComponent } from './app.component';


//modulos

import { ComponentModule } from './components/component.module';
import { AppRoutingModule } from './routers/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   ComponentModule,
   BrowserModule,
   AppRoutingModule,
   SharedModule,
   PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
