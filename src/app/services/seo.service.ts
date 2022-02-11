import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta : Meta) { }


    generarTag(config){

      config = {
        description: "Vende recargas electrónicas, paga servicios y tarjetas de regalo todo eso en una sola plataforma",
        keywords: "recargas electrónicas, pago de servicios, pagar recibo telmex, tarjetas de regalo, pines electronicos, comisión 7",
        ogtitle: "Vende recargas electrónicas, paga servicios y tarjetas de regalo todo eso en una sola plataforma",
        ogdescription: "Recargas Electrónicas, pago de servicios y tarjetas de regalo todo con una comisión fija, en todas las compañías: CFE, Telmex, AT&amp;T, Google Play, Netflix y muchos mas",
        image: "./assets/images/logo_recargas-800x400.png",
        slug: "",
        ...config    
    }

      this.meta.updateTag({ property: "description", content: config.description, lang: "esp" });
      this.meta.updateTag({ property: "keywords", content: config.keywords, lang: "esp" });
      this.meta.updateTag({ property: "og:locale", content: "es_ES" });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:title', content: config.ogtitle });
      this.meta.updateTag({ property: 'og:description', content: config.ogdescription });
      this.meta.updateTag({ property: 'og:url', content: `https://recarga5g.com/#/${config.slug}` });
      this.meta.updateTag({ property: 'og:site_name', content: 'Vender Recargas Electronicas, Pagar servicios: Telcel, movistar, CFE, Telmex... en Tu Negocio' });
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ property: 'og:width', content: "800" });
      this.meta.updateTag({ property: 'og:height', content: "400" });
    
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:label1', content: 'Tiempo de lectura' });
      this.meta.updateTag({ name: 'twitter:data1', content: '15 minutos' });
     
    }
}
