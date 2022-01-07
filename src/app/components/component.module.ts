import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { MinfoComponent } from './Shared/minfo/minfo.component';

@NgModule({
    declarations: [
        HomeComponent,
        ServiciosComponent,
        ReportesComponent,
        InscripcionComponent,
        ContactoComponent,

        NavbarComponent,
        MinfoComponent,
        FooterComponent
    ],

    imports: [
        BrowserModule,
        RouterModule
    ],

    exports: [
        HomeComponent,
        ServiciosComponent,
        ReportesComponent,
        InscripcionComponent,
        ContactoComponent,

        NavbarComponent,
        MinfoComponent,
        FooterComponent
    ],

    providers: [],
    bootstrap: []
})

export class ComponentModule{ }
