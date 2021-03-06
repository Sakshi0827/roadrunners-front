import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';



@NgModule({
  declarations: [BlogsComponent, BlogDetailComponent, BlogListComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    HttpClientModule
  ]
})
export class BlogsModule { }
