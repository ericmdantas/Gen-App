import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control
} from 'angular2/common';

import { Router } from 'angular2/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'client/dev/user/templates/login.html',
  styleUrls: ['client/dev/user/styles/user.css'],
  providers: []
})
export class LoginComponent {
    title: string = "Log In";
    loginForm: ControlGroup;

  constructor( @Inject(FormBuilder) fb:FormBuilder, @Inject(UserService) private _userService: UserService) {
    this.loginForm = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  onSubmit(credentials):void {
      console.log("on SUbmit here");
    this._userService.login(credentials.email, credentials.password)
    .subscribe((result) => {
      if (result) {
        console.log("Link to Todo?")
      }
    });
  }
}