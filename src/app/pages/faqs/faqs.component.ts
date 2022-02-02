import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor(private title: Title) {

    title.setTitle('Preguntas Frecuentes');

   }

  ngOnInit(): void {
  }

}
