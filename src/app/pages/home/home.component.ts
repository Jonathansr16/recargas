import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';



@Component({
  selector: 'app-inicio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', "./lading-page.css"]
})
export class HomeComponent  {

  animar= false;

  constructor(private title: Title, private wowService: NgwWowService) {
    
    title.setTitle('Inicio - Vende Recargas y Paga Servicios de cualquier compañia')
    this.wowService.init();
  }



  clientes: number=1000;
  ventas: number=0;
  servicios:number=0;
  anos:number=0;
  
  contador1: any = setInterval( () => {

    this.clientes+=500;

    if(this.clientes == 40000) {
        clearInterval(this.contador1);
    }
  },20);


  
  contador2: any = setInterval( () => {
  
    this.ventas+=20;

    if(this.ventas == 1800) {
        clearInterval(this.contador2);
    }
  }, 10);


  contador3: any = setInterval( () => {
  
    this.servicios++;

    if(this.servicios == 100) {
        clearInterval(this.contador3);
    }
  }, 10); 


 contador4: any = setInterval( () => {
  
    this.anos++;

    if(this.anos == 20) {
        clearInterval(this.contador4);
    }
  }, 55)



}

