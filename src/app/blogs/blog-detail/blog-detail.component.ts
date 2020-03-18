import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from 'src/app/services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit, OnDestroy {
  blog: any;
  blogId: any;
  blogSubscription: Subscription;
  blogIdSubscription: Subscription;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.blogId = this.route.snapshot.params.id;
    this.blogIdSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.blogId = params.id;
      });

    this.blogSubscription = this.blogService.fetchBlog(this.blogId).subscribe(resData => {
      this.blog = resData;
      console.log(this.blog);
    });
  }

  ngOnDestroy() {
    this.blogIdSubscription.unsubscribe();
    this.blogSubscription.unsubscribe();
  }
}
