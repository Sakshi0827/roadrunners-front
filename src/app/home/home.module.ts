import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeRoadrunnersComponent } from './home-roadrunners/home-roadrunners.component';
import { HomeBlogsComponent } from './home-blogs/home-blogs.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeSliderComponent, 
    HomeRoadrunnersComponent,
    HomeBlogsComponent, 
    HomeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],

  exports:[
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
