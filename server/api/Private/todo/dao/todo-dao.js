/// <reference path="../../../typings/main.d.ts" />
System.register(['mongoose', 'bluebird', 'lodash', '../model/todo-model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose, Promise, _, todo_model_1;
    var Todo;
    return {
        setters:[
            function (mongoose_1) {
                mongoose = mongoose_1;
            },
            function (Promise_1) {
                Promise = Promise_1;
            },
            function (_1) {
                _ = _1;
            },
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            todo_model_1.default.statics.getAll = function () {
                return new Promise(function (resolve, reject) {
                    var _query = {};
                    Todo
                        .find(_query)
                        .exec(function (err, todos) {
                        err ? reject(err)
                            : resolve(todos);
                    });
                });
            };
            todo_model_1.default.statics.createTodo = function (todo) {
                return new Promise(function (resolve, reject) {
                    if (!_.isObject(todo)) {
                        return reject(new TypeError('Todo is not a valid object.'));
                    }
                    var _todo = new Todo(todo);
                    _todo.save(function (err, saved) {
                        err ? reject(err)
                            : resolve(saved);
                    });
                });
            };
            todo_model_1.default.statics.deleteTodo = function (id) {
                return new Promise(function (resolve, reject) {
                    if (!_.isString(id)) {
                        return reject(new TypeError('Id is not a valid string.'));
                    }
                    Todo
                        .findByIdAndRemove(id)
                        .exec(function (err, deleted) {
                        err ? reject(err)
                            : resolve();
                    });
                });
            };
            Todo = mongoose.model('Todo', todo_model_1.default);
            exports_1("default",Todo);
        }
    }
});
