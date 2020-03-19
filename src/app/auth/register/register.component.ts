import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  // templatedriven approach
  // @ViewChild('f', {static:false}) signupForm: NgForm;
  // defaultUsername = "abc";
  // constructor() { }

  // ngOnInit() {
  // }

  // onSubmit(){
  //   console.log(this.signupForm);
  // }


  allFitnessGroups: any;
  allFitnessGroupSubscription: Subscription;

  allCountry: any;
  allCountrySubscription: Subscription;
  allState: any = null;
  allStateSubscription: Subscription;
  allCity: any = null;
  allCitySubscription: Subscription;
  // reactive approach
  signupForm: FormGroup;
  forbiddenUsernames = ['a', 'b'];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.allFitnessGroupSubscription = this.authService.fetchFitnessGroup().subscribe(resData => {
      this.allFitnessGroups = resData;
      console.log(this.allFitnessGroups);
    });
    this.allCountrySubscription = this.authService.fetchCountry().subscribe(resData => {
      this.allCountry = resData;
      this.allState = null;
      this.allCity = null;
      console.log(this.allCountry);
    });
    this.signupForm = new FormGroup({
      firstname : new FormControl(null, Validators.required),
      lastname: new FormControl(null),
      username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('female'),
      mobile: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      country: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null),
      fitnessgroup: new FormControl(null),
      company: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
  onChangeCountry(countryId: any) {
    console.log('countryId:-- ' + countryId);
    // this.allStateSubscription = this.authService.fetchState(countryId).subscribe(resData => {
    //   this.allState = resData;
    //   console.log('States By country:--' + JSON.stringify(this.allState));
    // });
  }
  onChangeState(stateId: any) {
    console.log('StateId:-- ' + stateId);
    // this.allCitySubscription = this.authService.fetchCity(stateId).subscribe(resData => {
    //   this.allCity = resData;
    //   console.log('Cities By state:--' +JSON.stringify(this.allCity));
    // })
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  ngOnDestroy() {
    // this.allCountrySubscription.unsubscribe();
    // this.allStateSubscription.unsubscribe();
    // this.allCitySubscription.unsubscribe();
    // this.allFitnessGroupSubscription.unsubscribe();
  }
}
