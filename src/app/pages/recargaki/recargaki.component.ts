import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-recargaki',
  templateUrl: './recargaki.component.html',
  styleUrls: ['./recargaki.component.css']
})
export class RecargakiComponent implements OnInit {

  constructor(private title: Title, private seoService: SeoService) { 
    title.setTitle('Repote de Deposito Recargaki/Planetaemx')
  }

  ngOnInit(): void {
    let t:string = "Repote de Deposito Recargaki/Planetaemx";
    this.title.setTitle(t);

    this.seoService.generarTag({
      description: "Reporte de depositos & transferencias para usuarios recargaki/planetaemx",
      keywords: "reportar deposito para recargar saldo",
      ogtitle: "Reporte de Deposito Recargaki/Planetaemx",
      ogdescription: "Reporte de depositos & transferencias para usuarios recargaki/planetaemx",
      slug: "recargaki"
    })
  }

}
