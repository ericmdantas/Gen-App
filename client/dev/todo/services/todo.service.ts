import {
  Inject
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from 'angular2/http';

import 'rxjs/add/operator/map';

export class TodoService {
  static ENDPOINT: string = '/api/todos/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this._http
               .get(TodoService.ENDPOINT.replace(':id', ''), { headers: headers })
               .map((r) => r.json());
               
  }

  add(message:string):Observable<any> {
    let _messageStringified = JSON.stringify({todoMessage: message});

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(TodoService.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
               .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this._http
               .delete(TodoService.ENDPOINT.replace(':id', id));
  }
}
