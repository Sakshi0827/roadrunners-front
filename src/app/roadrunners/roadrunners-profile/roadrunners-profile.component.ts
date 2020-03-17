import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roadrunners-profile',
  templateUrl: './roadrunners-profile.component.html',
  styleUrls: ['./roadrunners-profile.component.css']
})
export class RoadrunnersProfileComponent implements OnInit, OnDestroy {
  userId: number;
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.params.id;
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
      this.userId = +params.id;
    })
    console.log('user id' + this.userId);
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
