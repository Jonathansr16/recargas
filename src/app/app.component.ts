import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ElementRef } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import {Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  showButtom = false;
  private scrollHeight = 500;
  title = 'Recargas Electronicas';

  constructor( private wowService: NgwWowService,  
               @Inject(DOCUMENT) private document: Document, 
               @Inject(PLATFORM_ID) private platformId,   
               private gtmService: GoogleTagManagerService,
               private router: Router,
               private el: ElementRef)  
          {     
         
            this.wowService.init();

          if(isPlatformBrowser (this.platformId))  {
              this.gtmService.addGtmToDom();
             }
  
           this.router.events.forEach(item => {
            if (item instanceof NavigationEnd) {
                const gtmTag = {
                    event: 'page',
                    pageName: item.url
                };
      
                this.gtmService.pushTag(gtmTag);
            }
        });
         
          }

     //Obtenwmos el scroll para animar botom de subir
     @HostListener('window:scroll')
     onWindoScroll():void {

      if(isPlatformBrowser (this.platformId)) {
       
        //obtenemos el numero de pixeles verticalmente
        const yoffSet = window.scrollY;
        const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        this.showButtom = (yoffSet || scrollTop) > this.scrollHeight;
    }
  }



  onScrollTop():void {
 
    if(isPlatformBrowser (this.platformId)) {
      this.document.documentElement.scrollTop = 0;
    }
  }

  ngOnInit(): void {
   
  }

  scroll$ = fromEvent(this.el.nativeElement, 'scroll').pipe(
    map((e: MouseEvent) => e.timeStamp)
  );

}
