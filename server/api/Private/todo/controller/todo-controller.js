/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['../dao/todo-dao'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_dao_1;
    var TodoController;
    return {
        setters:[
            function (todo_dao_1_1) {
                todo_dao_1 = todo_dao_1_1;
            }],
        execute: function() {
            TodoController = (function () {
                function TodoController() {
                }
                TodoController.getAll = function (req, res) {
                    todo_dao_1.default
                        .getAll()
                        .then(function (todos) { return res.status(200).json(todos); })
                        .catch(function (error) { return res.status(400).json(error); });
                };
                TodoController.createTodo = function (req, res) {
                    var _todo = req.body;
                    todo_dao_1.default
                        .createTodo(_todo)
                        .then(function (todo) { return res.status(201).json(todo); })
                        .catch(function (error) { return res.status(400).json(error); });
                };
                TodoController.deleteTodo = function (req, res) {
                    var _id = req.params.id;
                    todo_dao_1.default
                        .deleteTodo(_id)
                        .then(function () { return res.status(200).end(); })
                        .catch(function (error) { return res.status(400).json(error); });
                };
                return TodoController;
            }());
            exports_1("TodoController", TodoController);
        }
    }
});
