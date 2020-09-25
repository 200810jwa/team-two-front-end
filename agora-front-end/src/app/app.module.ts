import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginLinkComponent } from './components/login-link/login-link.component';
import { SignupLinkComponent } from './components/signup-link/signup-link.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { PublishPageComponent } from './pages/publish-page/publish-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentEditableDirective } from './directives/content-editable.directive';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    NavbarComponent,
    LoginLinkComponent,
    SignupLinkComponent,
    LoginModalComponent,
    ArticleListComponent,
    ArticleFormComponent,
    PublishPageComponent,
    ContentEditableDirective,
    DropdownMenuComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
