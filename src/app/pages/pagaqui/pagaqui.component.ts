import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-pagaqui',
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.css']
})
export class PagaquiComponent implements OnInit {

  constructor(private title: Title, private seoService: SeoService) { }


  ngOnInit(): void {
    let t: string= "Reporte de Deposito Pagaqui";
    this.title.setTitle(t);

    this.seoService.generarTag({
      description: "Reporte de depositos & transferencias para usuarios de Pagaqui",
      keywords: "reportar deposito para recargar saldo",
      ogtitle: "Reporte de Deposito Pagaqui",
      ogdescription: "Reporte de depositos & transferencias para usuarios de Pagaqui",
      slug: "pagaqui"
    })
  }

}
