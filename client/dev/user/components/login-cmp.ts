import {
  Component,
  View,
  Inject,
  OnInit
} from 'angular2/core';

import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control
} from 'angular2/common';

import {UserService} from '../services/user-service';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'login-cmp',
  templateUrl: 'client/dev/user/templates/login.html',
  styleUrls: ['client/dev/user/styles/user.css'],
  providers: [UserService]
})
export class LoginCmp implements OnInit {
  title: string = "Login";
  logins: Login[] = [];
  todoForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(UserService) private _userService: UserService) {
    this.todoForm = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._userService
        .getAll()
        .subscribe((todos) => {
          this.logins = todos;
        });
  }

  add(message:string):void {
    this._userService
        .add(message)
        .subscribe((m) => {
          this.logins.push(m);
          (<Control>this.todoForm.controls['todoMessage']).updateValue("");
        });
  }

  remove(id:string):void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.logins.forEach((t, i) => {
          if (t._id === id)
            return this.logins.splice(i, 1);
        });
      })
  }
}
