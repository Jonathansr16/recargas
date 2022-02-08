import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  constructor(private title: Title) {

    title.setTitle('Inscripción - Únete a nosotros y haz crecer tu negocio');
   }

  ngOnInit(): void {
  }

}
