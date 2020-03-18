import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  allBlogsSubscription: Subscription;
  allBlogs: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.allBlogsSubscription = this.blogService.fetchAllBlogs().subscribe( resData => {
      this.allBlogs = resData;
      console.log(this.allBlogs);
    });
  }

  ngOnDestroy() {
    this.allBlogsSubscription.unsubscribe();
  }
}
