import { Component } from '@angular/core';
import {  Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {

  clientes: number=1000;
  ventas: number=0;
  servicios:number=0;
  anos:number=0;
  
  constructor(  private title: Title, private seoService: SeoService)  {
    

    let t: string= "Inicio - Vende recargas electrónicas, paga servicios y tarjetas de regalo todo eso en una sola plataforma";
    this.title.setTitle(t);
    
    this.seoService.generarTag({
      description: "Recargas Electrónicas, pago de servicios y tarjetas de regalo todo con una comisión fija, en todas las compañías: CFE, Telmex, AT&amp;T, Google Play, Netflix y muchos mas",
      ogtitle: "Vende recargas electrónicas, paga servicios y tarjetas de regalo todo eso en una sola plataforma",
      ogdescription: "Recargas Electrónicas, pago de servicios y tarjetas de regalo todo con una comisión fija, en todas las compañías: CFE, Telmex, AT&amp;T, Google Play, Netflix y muchos mas",
      slug: "home"
    })

    
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
