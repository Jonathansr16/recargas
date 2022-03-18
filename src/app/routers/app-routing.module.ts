import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages-routing.module';




const routes: Routes = [
    { path: 'pages', loadChildren: () => import( '../pages/pages.module').then(m => m.PagesModule)},
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking'}),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
