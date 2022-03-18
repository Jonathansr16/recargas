import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//compnentes
import { AppComponent } from './app.component';

//modulos
import { AppRoutingModule } from './routers/app-routing.module';
import { SharedModule } from './shared/shared.module';
//Tag Manager
import { GoogleTagManagerModule } from 'angular-google-tag-manager';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule.withServerTransition({ appId: 'serverApp' }),
   AppRoutingModule,
    RouterModule,
    SharedModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-T3D7SX5',
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
