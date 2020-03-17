import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-roadrunners-list',
  templateUrl: './roadrunners-list.component.html',
  styleUrls: ['./roadrunners-list.component.css']
})
export class RoadrunnersListComponent implements OnInit {
  userData;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchAllUsers().subscribe( resData => {
      this.userData = resData;
      console.log(this.userData);
    });
  }

}
