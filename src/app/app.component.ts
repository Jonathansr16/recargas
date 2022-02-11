import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import {Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recargas Electronicas';

  constructor(@Inject(PLATFORM_ID) private platformId,   
                private gtmService: GoogleTagManagerService,
                private router: Router)  { 

           //Browser
         if(isPlatformBrowser (this.platformId)) {
           this.gtmService.addGtmToDom();
         }
  }

  ngOnInit(): void {
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


}
