import { Component, Inject } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from '../user/services/user.service';

@Component({
  selector: 'nav-bar',
  template: `
  <div class="nav">
    <a [routerLink]="['LoginComponent']" *ngIf="_userService.isLoggedIn()">Login</a>
    <a [routerLink]="['SignupComponent']" *ngIf="_userService.isLoggedIn()">Sign Up</a>
    <a [routerLink]="['TodoComponent']" *ngIf="!_userService.isLoggedIn()">ToDo</a>
  </div>
  `,
  styleUrls: ['client/dev/todo/styles/todo.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ UserService ]
})

export class NavComponent {
    
    constructor(@Inject(UserService) private _userService: UserService) {}
    
}