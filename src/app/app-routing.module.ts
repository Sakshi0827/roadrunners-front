import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: "", loadChildren: "./home/home.module.ts#HomeModule"}
  { 
    path: '', 
    redirectTo:'/home', 
    pathMatch:'full'
  },
  {
    path:"home", 
    loadChildren: './home/home.module#HomeModule' 
  },
  {
    path: 'india-event',
    loadChildren: './india-event/india-event.module#IndiaEventModule'
  },
  {
    path: 'blogs',
    loadChildren: './blogs/blogs.module#BlogsModule'
  },
  {
    path: 'roadrunners',
    loadChildren: './roadrunners/roadrunners.module#RoadrunnersModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
