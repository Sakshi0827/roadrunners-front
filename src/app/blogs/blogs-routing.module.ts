import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';


const blogsRoutes: Routes = [
    { path: "", component: BlogsComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: "blog-detail/:id",
        component: BlogDetailComponent
      }
    ]  }
];

@NgModule({
  imports: [RouterModule.forChild(blogsRoutes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { } 
