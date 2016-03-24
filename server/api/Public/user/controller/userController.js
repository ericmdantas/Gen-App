/// <reference path="../../../../typings/tsd.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User, UserController;
    return {
        setters:[],
        execute: function() {
            User = require('../model/userModel');
            UserController = (function () {
                function UserController() {
                }
                UserController.getAll = function (req, res) {
                    User
                        .getAll()
                        .then(function (users) { return res.status(200).json(users); })
                        .catch(function (error) { return res.status(400).json(error); });
                };
                UserController.createUser = function (req, res) {
                    var _user = req.body;
                    User
                        .createUser(_user)
                        .then(function (user) { return res.status(201).json(user); })
                        .catch(function (error) { return res.status(400).json(error); });
                };
                UserController.deleteUser = function (req, res) {
                    var _id = req.params.id;
                    User
                        .deleteUser(_id)
                        .then(function () { return res.status(200).end(); })
                        .catch(function (error) { return res.status(400).json(error); });
                };
                return UserController;
            }());
            exports_1("UserController", UserController);
        }
    }
});
