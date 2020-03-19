import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
    { path: "", component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'register'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { } 
