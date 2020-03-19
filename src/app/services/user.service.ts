import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { __param } from 'tslib';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    fetchAllUsers() {
        return this.http.get('http://localhost:3000/user-list');
    }
    fetchUser(id: string) {
        return this.http.get('http://localhost:3000/user', { params: new HttpParams().set('user_id',  id) })
    }
}
