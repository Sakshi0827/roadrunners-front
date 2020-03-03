import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoadrunnersComponent } from './roadrunners.component';
import { RoadrunnersListComponent } from './roadrunners-list/roadrunners-list.component';
import { RoadrunnersProfileComponent } from './roadrunners-profile/roadrunners-profile.component';


const roadrunnersRoutes: Routes = [
    { 
        path: "", 
        component: RoadrunnersComponent,
        children: [
            {
              path: '',
              component: RoadrunnersListComponent
            },
            {
              path: 'profile',
              component: RoadrunnersProfileComponent,
              pathMatch: 'full'
            }
          ]   
    }
];

@NgModule({
  imports: [RouterModule.forChild(roadrunnersRoutes)],
  exports: [RouterModule]
})
export class RoadrunnersRoutingModule { }
