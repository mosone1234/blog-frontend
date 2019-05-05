import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { UserComponent } from './components/admin/user/user.component';
import { ArticleComponent } from './components/admin/article/article.component';
import { CommentComponent } from './components/admin/comment/comment.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserComponent,
    ArticleComponent,
    CommentComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
