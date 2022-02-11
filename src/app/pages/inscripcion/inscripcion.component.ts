import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  constructor(private title: Title, private seoService: SeoService) { }

  ngOnInit(): void {
    let t:string= "Inscripción - Únete a nosotros y haz crecer tu negocio";
    this.title.setTitle(t);

    this.seoService.generarTag({
      description: "Inscríbete y disfruta de los grandes beneficios que tenemos para ti",
      keywords: "venta de tiempo aire, vender recargas, inscribirme para vender recargas",
      ogtitle: "Únete a nosotros y haz crecer tu negocio",
      ogdescription: "Inscríbete y disfruta de los grandes beneficios que tenemos para ti",
      slug: "inscripcion"
    })
  }

}
