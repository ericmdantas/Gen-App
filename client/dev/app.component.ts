import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {TodoService} from './todo/services/todo.service';
import { TodoCmp } from './todo/components/todo.component';
import { LoginComponent } from './user/components/login.component';
import { UserService } from './user/services/user.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['client/dev/todo/styles/todo.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
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
  }
])

export class AppComponent {
  title = 'ng2do';
}