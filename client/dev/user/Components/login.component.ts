import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: 'client/dev/user/templates/login.html',
  styleUrls: ['client/dev/todo/styles/todo.css'],
  providers: []
})
export class LoginComponent {
  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['Home']);
      }
    });
  }
}