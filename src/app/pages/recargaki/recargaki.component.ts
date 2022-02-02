import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recargaki',
  templateUrl: './recargaki.component.html',
  styleUrls: ['./recargaki.component.css']
})
export class RecargakiComponent implements OnInit {

  constructor(private title: Title) { 
    title.setTitle('Repote de Deposito Recargaki/Planetaemx')
  }

  ngOnInit(): void {
  }

}
