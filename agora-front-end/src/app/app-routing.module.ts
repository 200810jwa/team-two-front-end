import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { PublishPageComponent } from './pages/publish-page/publish-page.component';
import { DisplayUserArticleComponent } from './pages/display-user-article/display-user-article.component';
import { UsersArticlesListComponent } from './components/users-articles-list/users-articles-list.component';
import { DisplayUsersArticlesComponent } from './pages/display-users-articles/display-users-articles.component';
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
    path: 'user_article',
    component: DisplayUserArticleComponent
  },
  {
    path: 'users_articles',
    component: DisplayUsersArticlesComponent
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
