import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeRoadrunnersComponent } from './home-roadrunners/home-roadrunners.component';
import { HomeBlogsComponent } from './home-blogs/home-blogs.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeSliderComponent, HomeRoadrunnersComponent, HomeBlogsComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
