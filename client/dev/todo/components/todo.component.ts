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

import { Router } from 'angular2/router';

import {TodoService} from '../services/todo.service';
import {NavComponent} from '../../nav/nav.component';

type Todo = {
  todoMessage: string;
  _id: string;
}

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