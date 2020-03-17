import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-roadrunners-profile',
  templateUrl: './roadrunners-profile.component.html',
  styleUrls: ['./roadrunners-profile.component.css']
})
export class RoadrunnersProfileComponent implements OnInit, OnDestroy {
  userId: string;
  usersSubscription: Subscription;
  athleteSubscription: Subscription;
  athleteData: any;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.usersSubscription = this.route.params.subscribe(
      (params: Params) => {
      this.userId = params.id;
    });
    this.userService.fetchAthlete(this.userId).subscribe(resData => {
      this.athleteData = (resData);
      console.log('user id ' + this.userId);
      console.log('AthleteData ' + JSON.stringify(this.athleteData));
    });
   
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
    this.athleteSubscription.unsubscribe();
  }
}
