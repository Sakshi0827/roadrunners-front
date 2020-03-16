import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RoadrunnersComponent } from './roadrunners.component';
import { RoadrunnersListComponent } from './roadrunners-list/roadrunners-list.component';
import { RoadrunnersProfileComponent } from './roadrunners-profile/roadrunners-profile.component';
import { RoadrunnersRoutingModule } from './roadrunner-routing.module';



@NgModule({
  declarations: [RoadrunnersComponent, RoadrunnersListComponent, RoadrunnersProfileComponent],
  imports: [
    CommonModule,
    RoadrunnersRoutingModule,
    HttpClientModule
  ]
})
export class RoadrunnersModule { }
