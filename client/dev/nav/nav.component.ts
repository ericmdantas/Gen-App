import { Component, Inject } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from '../user/services/user.service';

@Component({
  selector: 'nav-bar',
  template: `
  <div *ngIf="!_userService.isLoggedIn()" class="nav">
    <a [routerLink]="['LoginComponent']">Login</a>
    <a [routerLink]="['SignupComponent']">Sign Up</a>
  </div>
  <div *ngIf="_userService.isLoggedIn()" class="nav">
    <a [routerLink]="['TodoComponent']">ToDo</a>
    <button (click)="_userService.logout($event)">Log Out</button>
  </div>
  `,
  styleUrls: ['client/dev/todo/styles/todo.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ UserService ]
})

export class NavComponent {
    
    constructor(@Inject(UserService) private _userService: UserService) {}
    
}