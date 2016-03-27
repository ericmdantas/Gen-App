import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {TodoService} from './todo/services/todo.service';
import { UserService } from './user/services/user.service';
import { TodoComponent } from './todo/components/todo.component';
import { LoginComponent } from './user/components/login.component';
import { SignupComponent } from './user/components/signup.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['client/dev/todo/styles/todo.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent],
  providers: [
    TodoService,
    UserService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'TodoComponent',
    component: TodoComponent,
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: LoginComponent
  },
  {
    path: '/signup',
    name: 'SignupComponent',
    component: SignupComponent
  }
])

export class AppComponent {
  title = 'ng2do';
}