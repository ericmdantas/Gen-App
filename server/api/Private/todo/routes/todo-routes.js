/// <reference path="../../../typings/main.d.ts" />
System.register(['../controller/todo-controller'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_controller_1;
    var TodoRoutes;
    return {
        setters:[
            function (todo_controller_1_1) {
                todo_controller_1 = todo_controller_1_1;
            }],
        execute: function() {
            TodoRoutes = (function () {
                function TodoRoutes() {
                }
                TodoRoutes.init = function (router) {
                    router
                        .route('/api/todos')
                        .get(todo_controller_1.TodoController.getAll)
                        .post(todo_controller_1.TodoController.createTodo);
                    router
                        .route('/api/todos/:id')
                        .delete(todo_controller_1.TodoController.deleteTodo);
                };
                return TodoRoutes;
            }());
            exports_1("TodoRoutes", TodoRoutes);
        }
    }
});
