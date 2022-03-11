import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {  Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import { SeoService } from 'src/app/services/seo.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', "./lading-page.css"]
})
export class HomeComponent implements OnInit  {


  clientes: number=1000;
  ventas: number=0;
  servicios:number=0;
  anos:number=0;
  
  constructor(  private title: Title,  
                private wowService: NgwWowService,  
                private seoService: SeoService,
                private renderer2: Renderer2)  {
    
    this.wowService.init();

    let t: string= "Inicio - Vende recargas electrónicas, paga servicios y tarjetas de regalo todo eso en una sola plataforma";
    this.title.setTitle(t);
    
    this.seoService.generarTag({
      description: "Recargas Electrónicas, pago de servicios y tarjetas de regalo todo con una comisión fija, en todas las compañías: CFE, Telmex, AT&amp;T, Google Play, Netflix y muchos mas",
      ogtitle: "Vende recargas electrónicas, paga servicios y tarjetas de regalo todo eso en una sola plataforma",
      ogdescription: "Recargas Electrónicas, pago de servicios y tarjetas de regalo todo con una comisión fija, en todas las compañías: CFE, Telmex, AT&amp;T, Google Play, Netflix y muchos mas",
      slug: "home"
    })


  }

  ngOnInit(): void {
  }


  closeModal():void {
    
  }

  closeProductBtn() {
    const productsModel = document.querySelectorAll(".product-modal");
    const learMoreBtns = document.querySelectorAll(".learn-more-btn");
    const productsCloseBtn = document.querySelectorAll(".modal-close-btn");

    let productModal:any = function (modalclick:any) {
        productsModel[modalclick].classList.add('active');
    }

    learMoreBtns.forEach((learMoreBtn, i) => {
        learMoreBtn.addEventListener("click", () => {
          productModal(i);
        });
    });

    productsCloseBtn.forEach((modalCloseBtn) => {
      modalCloseBtn.addEventListener("click", () =>{
        productsModel.forEach((ModelView) => {
          ModelView.classList.remove("active");
        });
      });
    });
  }



  contador1: any = setInterval( () => {

    this.clientes+=500;

    if(this.clientes == 40000) {
        clearInterval(this.contador1);
    }
  },40);


  
  contador2: any = setInterval( () => {
  
    this.ventas+=20;

    if(this.ventas == 1800) {
        clearInterval(this.contador2);
    }
  }, 40);


  contador3: any = setInterval( () => {
  
    this.servicios++;

    if(this.servicios == 100) {
        clearInterval(this.contador3);
    }
  }, 40); 


 contador4: any = setInterval( () => {
  
    this.anos++;

    if(this.anos == 20) {
        clearInterval(this.contador4);
    }
  }, 200)



}

