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
    path: 'roadrunners',
    loadChildren: './roadrunners/roadrunners.module#RoadrunnersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
