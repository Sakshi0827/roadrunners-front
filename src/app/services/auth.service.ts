import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AuthService {
    constructor(private http: HttpClient) {}
    
    fetchFitnessGroup() {
        return this.http.get('http://localhost:3000/fitness-group');
    }
    fetchCountry() {
        return this.http.get('http://localhost:3000/country');
    }
    fetchState(countryId: any) {
        return this.http.get('http://localhost:3000/fetch-state'+ countryId );
    }
    fetchCity() {
        return this.http.get('http://localhost:3000/city');
    }
}