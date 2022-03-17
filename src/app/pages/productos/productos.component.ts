import { Component, OnInit } from '@angular/core';


import { Autoplay, Swiper, EffectCards } from 'swiper'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';



SwiperCore.use([ Autoplay, EffectCoverflow, Pagination]);
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit{
  
  constructor( private title: Title, private seoService: SeoService) { 
    let t:string= "Nuestros Productos - Conoce y vende todos los productos que tenemos para ti";
    this.title.setTitle(t);

    this.seoService.generarTag({
      description: "Recargas Electronicas, Pago de Servicios, Tarjetas de regalo: Telcel, Virgin, CFE, Google Play, Netflix, Steam, Nintendo",
      keywords: "recargas electronicas, recarga telcel, pagar servicio, pagar recibo telmex, tarjeta de regalo, pines electronicos",
      ogtitle: "Conoce y vende todos los productos que tenemos para ti",
      ogdescription: "Recargas Electronicas, Pago de Servicios, Tarjetas de regalo: Telcel, Virgin, CFE, Google Play, Netflix, Steam, Nintendo",
      slug: "productos"
    });
  
   
  }

  ngOnInit(): void {
    
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
