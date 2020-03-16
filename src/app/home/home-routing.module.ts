import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoadrunnersComponent } from './home-roadrunners/home-roadrunners.component';


const homeRoutes: Routes = [
    { 
      path: "",
      component: HomeComponent,
      children: [
        {
          path: "",
          component: HomeRoadrunnersComponent
        }
      ] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
