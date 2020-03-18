import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class EventService {
    constructor(private http: HttpClient) {}

    fetchAllEvents() {
        return this.http.get('http://localhost:3000/event-list');
    }

    fetchEvent(id: any) {
        return this.http.get('http://localhost:3000/event-detail', { params: new HttpParams().set('event_id',  id) });
    }
}