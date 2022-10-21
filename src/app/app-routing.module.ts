import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PostsComponent} from "./posts/posts.component";
import {SinglePostComponent} from "./single-post/single-post.component";
import {AuthGuardGuard} from "./auth-guard.guard";

const routes: Routes = [
  {path: 'posts', component: PostsComponent,},
  { path: 'posts/:postId/details', component: SinglePostComponent, title: 'single post',  canActivate: [AuthGuardGuard],},
  { path: 'sign-in', component: SignInComponent, title: 'First component'},
  { path: 'sign-up', component: SignUpComponent },
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
