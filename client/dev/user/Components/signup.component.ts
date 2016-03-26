import { Component, Inject, OnInit } from 'angular2/core';
import { Validators, FormBuilder, ControlGroup, Control } from 'angular2/common';

import { Router } from 'angular2/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'signup',
  templateUrl: 'client/dev/user/templates/signup.html',
  styleUrls: ['client/dev/user/styles/user.css'],
  providers: []
})

export class SignupComponent {
    title: string = "Sign Up";
    signUpForm: ControlGroup;

  constructor( @Inject(FormBuilder) fb:FormBuilder, @Inject(UserService) private _userService: UserService, private _router: Router) {
    this.signUpForm = fb.group({
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  onSubmit(details):void {
    console.log("on Submit here");
    this._userService.signUp(details.firstName, details.lastName, details.email, details.password)
    .subscribe((result) => {
      if (result) {
        console.log("Link to Todo?");
        this._router.navigate(['LoginComponent']);
      } else { console.log("Failed");}
    });
  }
}