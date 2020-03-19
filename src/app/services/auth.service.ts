import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

import {UserModel} from '../model/user.model';

interface LoginResData {
  status: string;
  message: string;
  email: string;
  idToken: string;
  expiresIn: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new Subject<UserModel>();

  constructor(private http: HttpClient) {}

  login(loginData) {
    return this.http.post<LoginResData>('http://localhost:3000/login', loginData)
      .pipe(catchError(this.handleError), tap(resData => {
        const user = new UserModel(resData.email, resData.idToken, resData.expiresIn);
      }));
  }

  signup(signupData) {
    return this.http.post('http://localhost:3000/signup', signupData)
      .pipe(catchError(this.handleError), tap(resData => {
        const expirationDate = new Date(new Date().getTime() + resData.expiresIn);
        const user = new UserModel(resData.email, resData.idToken, expirationDate);
      }));
  }

  fetchFitnessGroup() {
    return this.http.get('http://localhost:3000/fitness-group');
  }

  fetchCountry() {
    return this.http.get('http://localhost:3000/country');
  }

  fetchState(countryId: any) {
    return this.http.get('http://localhost:3000/fetch-state' + countryId);
  }

  fetchCity(stateId: any) {
    return this.http.get('http://localhost:3000/fetch-city' + stateId);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return errorResponse;
  }
}

