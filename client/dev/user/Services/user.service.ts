import { Injectable, Inject } from 'angular2/core';
import { Headers, Http } from 'angular2/http';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(@Inject(Http) private _http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post('/authenticate', JSON.stringify({ email, password }), { headers })
      .map(res => res.json())
      .map((res) => {
          console.log(res.success);
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }
  
  signUp(firstName, lastName, email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/signup', JSON.stringify({ firstName, lastName, email, password }), { headers })
      .map(res => res.json())
      .map((res) => {
        console.log(res.success);
        return res.success;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}