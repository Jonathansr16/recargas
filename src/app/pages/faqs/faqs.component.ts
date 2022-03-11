import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent  {

  constructor(private title: Title, private seoServivce: SeoService) { 

    let t: string= "Preguntas Frecuentes";
    this.title.setTitle(t);

    this.seoServivce.generarTag({
      description: "Consulta las preguntas mas frecuentes para que puedas resolver tus dudas sobre como puedes vender recargas",
      keywords: "Como vender recargas electronicas, como vender, ayuda para vender recargas",
      ogtitle: "Preguntas Frecuentes",
      ogdescription: "Consulta las preguntas mas frecuentes para que puedas resolver tus dudas sobre como puedes vender recargas",
      slug: "faqs"
    })
  }

 
}
