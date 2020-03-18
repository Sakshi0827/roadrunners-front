import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {
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