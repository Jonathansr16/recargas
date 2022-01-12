import { Component, AfterViewInit} from '@angular/core';


import { Autoplay, Swiper, EffectCards } from 'swiper'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";


SwiperCore.use([ Autoplay, EffectCoverflow, Pagination]);
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})


export class ServiciosComponent implements AfterViewInit {
  

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
     
      // effect: 'coverflow',
      // grabCursor: true,
      // centeredSlides: true,
      // slidesPerView: 'auto',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // },
      // loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      // },


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
