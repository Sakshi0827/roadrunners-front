import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BlogService {
    
    constructor(private http: HttpClient) {}

    fetchAllBlogs() {
        return this.http.get('http://localhost:3000/blogs-list');
    }

    fetchBlog(id: any) {
        return this.http.get('http://localhost:3000/blog-detail', { params: new HttpParams().set('blog_id',  id) });
    }
    
}