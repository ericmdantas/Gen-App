import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control
} from 'angular2/common';

import { Router, CanActivate } from 'angular2/router';
import {tokenNotExpired} from '../../../../node_modules/angular2-jwt/angular2-jwt'; //provides the tokenNotExpired() method
import {TodoService} from '../services/todo.service';
import {NavComponent} from '../../nav/nav.component';


type Todo = {
  todoMessage: string;
  _id: string;
}
@CanActivate(() => tokenNotExpired()) //Only show component if the user has a JWT and it hasn't expired 
@Component({
  selector: 'todo-cmp',
  templateUrl: 'client/dev/todo/templates/todo.html',
  styleUrls: ['client/dev/todo/styles/todo.css'],
  providers: []
})
export class TodoComponent implements OnInit {
  title: string = "ng2do";
  todos: Todo[] = [];
  todoForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(TodoService) private _todoService: TodoService) {
    this.todoForm = fb.group({
      "todoMessage": ["", Validators.required]
    });
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._todoService
        .getAll()
        .subscribe((todos) => {
          this.todos = todos;
        });
  }

  add(message:string):void {
    this._todoService
        .add(message)
        .subscribe((m) => {
          this.todos.push(m);
          (<Control>this.todoForm.controls['todoMessage']).updateValue("");
        });
  }

  remove(id:string):void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      })
  }
}