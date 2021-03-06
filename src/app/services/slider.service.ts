import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class SliderService {
    constructor(private http: HttpClient) {}
    
    fetchSliderImages() {
        return this.http.get('http://localhost:3000/slider-list');
    }
}