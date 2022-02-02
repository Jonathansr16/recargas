import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { MinfoComponent } from './minfo/minfo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MinfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MinfoComponent,
  ]
})
export class SharedModule { }
