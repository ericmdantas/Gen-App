import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from '../user/services/user.service';

@Component({
  selector: 'nav-bar',
  template: `
  <div class="nav">
    <a [routerLink]="['LoginComponent']">Login</a>
  </div>
  `,
  styleUrls: ['client/dev/todo/styles/todo.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    UserService
  ]
})

export class NavComponent {
  title = 'ng2do';
}