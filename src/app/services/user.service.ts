import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { __param } from 'tslib';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    fetchUsers() {
        return this.http.get('http://localhost:3000/user-list');
    }
    fetchAthlete(id: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('projectid', id);
        return this.http.get('http://localhost:3000/user', { params: new HttpParams().set('user_id',  id) })
    }
}
