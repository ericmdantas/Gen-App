import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {TodoService} from './todo/services/todo.service';
import { UserService } from './user/services/user.service';
import { TodoCmp } from './todo/components/todo.component';
import { LoginComponent } from './user/components/login.component';
import { SignupComponent } from './user/components/signup.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['client/dev/todo/styles/todo.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TodoService,
    UserService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'TodoCmp',
    component: TodoCmp,
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