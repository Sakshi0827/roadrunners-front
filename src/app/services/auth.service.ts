import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AuthService {
    loginData: {email: string, password: string};
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
    fetchCity(stateId: any) {
        return this.http.get('http://localhost:3000/fetch-city'+stateId);
    }
    login(loginData){
        return this.http.post('http://localhost:3000/login', loginData);
    }

}