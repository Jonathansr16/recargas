import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MinfoComponent } from './minfo/minfo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MinfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MinfoComponent
  ]
})
export class SharedModule { }
