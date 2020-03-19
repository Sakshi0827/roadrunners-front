import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: {
    email: string,
    password: string
  };
  loginSubscription: Subscription;
  loggedIn: false;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.loginData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    console.log(this.loginData);
    this. loginSubscription = this.authService.login(this.loginData).subscribe(resData => {
      this.loggedIn = resData.loggedIn;
    });
    if (this.loggedIn) {
      this.route.navigate(['/home']);
    }
    this.loginForm.reset(this.loginForm.get('password'));
  }
}
