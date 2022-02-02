import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagaqui',
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.css']
})
export class PagaquiComponent implements OnInit {

  constructor(private title: Title) {

    title.setTitle('Reporte de Deposito Pagaqui')
   }


  ngOnInit(): void {
  }

}
