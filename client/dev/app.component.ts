import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {TodoService} from './todo/services/todo.service';
import { TodoCmp } from './todo/components/todo.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['client/dev/todo/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})
@RouteConfig([
  {
    path: '/todo',
    name: 'todo-cmp',
    component: TodoCmp,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'ng2do';
}