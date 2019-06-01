import { RouteGuard } from './auth/route-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FollowersComponent } from './followers/followers.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FavouritesComponent,
    FollowersComponent,
    MyPostsComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
