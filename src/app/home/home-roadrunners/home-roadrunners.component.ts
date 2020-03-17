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
    this.userService.fetchUsers().subscribe(resData => {
      this.userData = resData;
      console.log(this.userData.data.length);
      if (this.userData.data.length>= 8) {
        for (let i = 0; i < 8; i++) {
          this.user.push(this.userData.data[i]);
        }
      }
      else{
        for(let i=0; i<this.userData.data.length;i++){
          this.user.push(this.userData.data[i]);
        }
      }
      console.log("hey ", this.user);
    });
  }

}
