import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-roadrunners',
  templateUrl: './home-roadrunners.component.html',
  styleUrls: ['./home-roadrunners.component.css']
})
export class HomeRoadrunnersComponent implements OnInit {

  userData;
  user = new Array();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUsers().subscribe( resData => {
      this.userData = resData;
      for (let i = 0; i < 3; i++) {
        this.user.push(this.userData.data[i]);
      }
      
      console.log (this.user);
    });
  }

}
