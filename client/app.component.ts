import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router'
import { TodoService }     from './todo/services/todo.service';
import { TodoComponent } from './todo/components/todo.component';
import { LoggedInRouterOutlet } from './user/services/loggedinRouterOutlet';
@Component({
  selector: 'app',
  directives: [LoggedInRouterOutlet],
  template: `
  <div class="container body-container">
    <router-outlet></router-outlet>
  </div>
  `
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
