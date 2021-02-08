import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component'
import { HomeComponent } from './home/home.component'
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'question', component: QuestionComponent},
  { path: 'home', component: HomeComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
