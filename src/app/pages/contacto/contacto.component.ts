import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private title: Title, private seoService: SeoService) {

    let t: string= "Contacto";
    this.title.setTitle(t);

   this.seoService.generarTag({
    description: "Contacto para asesoria para la venta de recargas electrónicas con una comsión fija",
    keywords: "contacto recargas electronicas, contacto para vender recargas, asesoria para la venta de recargas",
    ogtitle: "Contacto",
    ogdescription: "Contacto para asesoria para la venta de recargas electrónicas con una comsión fija",
    slug: "contacto"
   })
   }


   
  

}
