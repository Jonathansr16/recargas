import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//modulos
import { AppRoutingModule } from './routers/app-routing.module';
import { PagesModule } from './pages/pages.module';
import { OthersModule } from './others/others.module';


//compnentes
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
    PagesModule,
    OthersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
