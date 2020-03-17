import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



@NgModule({
  declarations: [BlogsComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
