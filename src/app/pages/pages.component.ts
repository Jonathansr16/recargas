import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';



@Component({
  selector: 'app-pages-component',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  showButtom = false;
  private scrollHeight = 500;
 
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId) { }



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
 


}
