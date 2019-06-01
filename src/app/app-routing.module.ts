import { RouteGuard } from './auth/route-guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { FollowersComponent } from './followers/followers.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {path:'' , component: HomeComponent},
  {path:'Allposts',component: AllPostsComponent, canActivate: [RouteGuard]},
  {path:'Favourites' , component: FavouritesComponent, canActivate: [RouteGuard]},
  {path:'Followers' , component: FollowersComponent, canActivate: [RouteGuard]},
  {path:'MyPosts' , component: MyPostsComponent, canActivate: [RouteGuard]},
  {path:'SignUp' , component: SignUpComponent},
  {path:'Login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
