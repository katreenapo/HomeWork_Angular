import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
}, {
  path: 'post', component: PostComponent
}, {
  path: 'blog', component: BlogComponent
}, {
  path: 'blog/:id', component: PostComponent
},  {
  path: '**', component: HomeComponent
}, {
  path: '', component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
