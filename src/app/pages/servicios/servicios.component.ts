import { Component, AfterViewInit} from '@angular/core';


import { Autoplay, Swiper, EffectCards } from 'swiper'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Title } from '@angular/platform-browser';


SwiperCore.use([ Autoplay, EffectCoverflow, Pagination]);
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})


export class ServiciosComponent implements AfterViewInit {
  
  constructor( private title: Title) {
      title.setTitle('Nuestros Servicios');
  }

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
     
      effect: 'cards',
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  
  }


   
}
