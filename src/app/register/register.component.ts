import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // templatedriven approach
  // @ViewChild('f', {static:false}) signupForm: NgForm;
  // defaultUsername = "abc";
  // constructor() { }

  // ngOnInit() {
  // }

  // onSubmit(){
  //   console.log(this.signupForm);
  // }


  // reactive approach

  signupForm: FormGroup;
  forbiddenUsernames = ['a', 'b'];

  constructor() {}
  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstname' : new FormControl(null, Validators.required),
      'lastname': new FormControl(null),
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null),
      'dob': new FormControl(null),
      'gender': new FormControl('female'),
      'mobile': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(null),
      'country': new FormControl(null),
      'pincode': new FormControl(null),
      'fitnessgroup': new FormControl(null),
      'company': new FormControl(null),
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !==-1){
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
