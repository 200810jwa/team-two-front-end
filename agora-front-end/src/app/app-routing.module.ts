import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { PublishPageComponent } from './pages/publish-page/publish-page.component';
const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'publish',
    component: PublishPageComponent,
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
