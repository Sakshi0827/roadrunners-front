import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  sliderImages;
  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.sliderService.fetchSliderImages().subscribe(resData => {
      console.log(resData);
      this.sliderImages = resData;
    });
  }

}
