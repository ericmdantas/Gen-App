import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TodoService }     from './todo/services/todo.service';
import { TodoComponent } from './todo/components/todo.component';
@Component({
  selector: 'my-app',
  templateUrl: 'client/index.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: TodoComponent,
    useAsDefault: true
  }
])
export class AppComponent {
 
}
