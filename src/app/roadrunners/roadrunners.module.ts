import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadrunnersComponent } from './roadrunners.component';
import { RoadrunnersListComponent } from './roadrunners-list/roadrunners-list.component';
import { RoadrunnersProfileComponent } from './roadrunners-profile/roadrunners-profile.component';
import { RoadrunnersRoutingModule } from './roadrunner-routing.module';



@NgModule({
  declarations: [RoadrunnersComponent, RoadrunnersListComponent, RoadrunnersProfileComponent],
  imports: [
    CommonModule,
    RoadrunnersRoutingModule
  ]
})
export class RoadrunnersModule { }
