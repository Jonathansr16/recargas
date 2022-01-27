import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScrollComponent } from './scroll/scroll.component';

//Components



@NgModule({
    declarations: [
    
    ScrollComponent
  ],

    imports: [
        BrowserModule,
        RouterModule
    ],

    exports: [
      ScrollComponent
    ],

    providers: [],
    bootstrap: []
})

export class ComponentModule{ }
