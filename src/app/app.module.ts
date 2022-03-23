import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//compnentes
import { AppComponent } from './app.component';

//modulos
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
//Tag Manager
import { GoogleTagManagerModule } from 'angular-google-tag-manager';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule.withServerTransition({ appId: 'serverApp' }),
   SharedModule,
   PagesModule,
   AppRoutingModule,
   RouterModule,
   GoogleTagManagerModule.forRoot({
      id: 'GTM-T3D7SX5',
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
