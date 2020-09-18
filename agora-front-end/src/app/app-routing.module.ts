import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
