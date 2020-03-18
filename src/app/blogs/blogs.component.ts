import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  allBlogs;
  constructor(private blogsService: BlogService) { }

  ngOnInit() {
    this.blogsService.fetchAllBlogs().subscribe( resData => {
      this.allBlogs = resData;
      console.log(this.allBlogs);
    });
  }

}
