import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', "./lading-page.css"]
})
export class HomeComponent  {

  clientes: number=0;
  ventas: number=0;
  productos:number=0;
  anos:number=0;
  
  contador1: any = setInterval( () => {

    this.clientes++;

    if(this.clientes == 40) {
        clearInterval(this.contador1);
    }
  },10);


  
  contador2: any = setInterval( () => {
  
    this.ventas+=20;

    if(this.ventas == 1800) {
        clearInterval(this.contador2);
    }
  }, 10);


  contador3: any = setInterval( () => {
  
    this.productos++;

    if(this.productos == 100) {
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
