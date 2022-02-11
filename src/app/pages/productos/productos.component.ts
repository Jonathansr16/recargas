import { Component, AfterViewInit} from '@angular/core';


import { Autoplay, Swiper, EffectCards } from 'swiper'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Title } from '@angular/platform-browser';


SwiperCore.use([ Autoplay, EffectCoverflow, Pagination]);
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements AfterViewInit {
  
  constructor( private title: Title) {
      title.setTitle('Nuestros Productos - Conoce todos los productos que tenemos para ti');
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
